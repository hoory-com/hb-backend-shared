import { Inject, Injectable, Logger } from '@nestjs/common';
import { Emitter } from '@socket.io/redis-emitter';
import { RedisClientFromUrl } from '../redis';
import { WIDGET_ROOM, WORKSPACE_AGENTS_ROOM } from './socket.emitter.type';
import { SOCKET_EMITTER_CONFIG } from './constants';

@Injectable()
export class SocketEmitter extends Emitter {
  constructor(@Inject(SOCKET_EMITTER_CONFIG) redisConfig: { redisUrl: string }) {
    const redisClient = RedisClientFromUrl(redisConfig.redisUrl);
    redisClient
      .connect()
      .then(() => {
        Logger.log('redis client connected');
      })
      .catch((err) => {
        Logger.error(err);
      });
    super(redisClient);
  }

  emitToWidgets(eventOrData: string | any, ...args: Array<any>) {
    if (args.length) this.toWidgets().emit(eventOrData, ...args);
    else this.toWidgets().emit(eventOrData);
  }

  emitToUser(userId: string, eventOrData: string | any, ...args: Array<any>) {
    if (args.length) this.toUser(userId).emit(eventOrData, ...args);
    else this.toUser(userId).emit(eventOrData);
  }

  emitToWorkspace(workspaceId: string, eventOrData: string | any, ...args: Array<any>) {
    if (args.length) this.toWorkspace(workspaceId).emit(eventOrData, ...args);
    else this.toWorkspace(workspaceId).emit(eventOrData);
  }

  emitToWorkspaceAgents(workspaceId: string, eventOrData: string | any, ...args: Array<any>) {
    if (args.length) this.toWorkspaceAgents(workspaceId).emit(eventOrData, ...args);
    else this.toWorkspaceAgents(workspaceId).emit(eventOrData);
  }

  emitToWorkspaceWidgets(workspaceId: string, eventOrData: string | any, ...args: Array<any>) {
    if (args.length) this.toWorkspaceWidgets(workspaceId).emit(eventOrData, ...args);
    else this.toWorkspaceWidgets(workspaceId).emit(eventOrData);
  }

  toWidgets() {
    return this.to(WIDGET_ROOM);
  }

  toWorkspaceAgents(workspaceId: string) {
    return this.to(WORKSPACE_AGENTS_ROOM(workspaceId));
  }

  toWorkspaceWidgets(workspaceId: string) {
    return this.to(workspaceId).except(WORKSPACE_AGENTS_ROOM(workspaceId));
  }

  toWorkspace(workspaceId: string) {
    return this.to(workspaceId);
  }

  toUser(userId: string) {
    return this.to(userId);
  }
}
