export enum UserStatus {
  ACTIVE = 'ACTIVE',
  // AWAY = 'AWAY',
  OFFLINE = 'OFFLINE',
  UNKNOWN = 'UNKNOWN'
}
export type GetWorkspaceStatus = { active: string[]; away: string[] };
export type GetUserStatus = UserStatus;
export type GetUsersStatus = {
  users: {
    status: UserStatus;
    userId: string;
  }[];
  workspaceId: string;
};
