import { HttpService, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientKafka } from '@nestjs/microservices';
import { GetUsersStatus, GetUserStatus, UserStatus } from './user-status.type';

export function convertToProtoStatus(status: UserStatus): number {
  switch (status) {
    case UserStatus.ACTIVE:
      return 2;
    case UserStatus.OFFLINE:
      return 0;
    case UserStatus.UNKNOWN:
    default:
      return 3;
  }
}

export function convertToServiceStatus(status: number): UserStatus {
  switch (status) {
    case 2:
      return UserStatus.ACTIVE;
    case 0:
      return UserStatus.OFFLINE;
    case 3:
    default:
      return UserStatus.UNKNOWN;
  }
}

@Injectable()
export class UserStatusService {
  private readonly userStatusBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    config: ConfigService,
    @Inject('KAFKA_SERVICE') private readonly clientKafka: ClientKafka
  ) {
    this.userStatusBaseUrl = config.get('USER_STATUS_HTTP_URL') || '';
    if (!this.userStatusBaseUrl)
      throw new Error(
        'user status service url is not specified, please make sure that you have a valid url in the `USER_STATUS_HTTP_URL` env variable'
      );
    if (this.userStatusBaseUrl.endsWith('/'))
      this.userStatusBaseUrl = this.userStatusBaseUrl.substr(0, this.userStatusBaseUrl.length - 1);
    this.userStatusBaseUrl += '/user-status';
  }

  async onModuleInit() {
    await this.clientKafka.connect();
  }
  async getUserStatus(userId: string): Promise<GetUserStatus> {
    const res = await this.httpService.get(`${this.userStatusBaseUrl}/${userId}`).toPromise();
    if (res && res.status >= 200 && res.status < 300) return res?.data;
    throw new Error(`${res?.statusText} , cannot get user status`);
  }

  async getUsersStatus(workspaceId: string, ids: string[]): Promise<GetUsersStatus> {
    const res = await this.httpService
      .post(`${this.userStatusBaseUrl}/bulk-get-statuses/${workspaceId}`, {
        ids
      })
      .toPromise();
    if (res && res.status >= 200 && res.status < 300) return res.data;
    throw new Error(`${res?.statusText} , cannot get users statuses`);
  }
}
