export function GetSocketEvent(event: string): string {
  return `Socket.Event.${event}`;
}

export enum SocketAuthType {
  WIDGET,
  AGENT
}

export type SocketEvent<TData> = {
  event: string;
  data: TData;
  client: SocketClient;
};

export type SocketClient = {
  type: SocketAuthType;
  userId: string;
  workspaceId: string;
  socketId: string;
  visitorToken: string;
};

export const SocketEventType = {
  WORKSPACE_UPDATED: 'workspaceUpdated',
  SUBSCRIPTION_UPDATED: 'subscriptionUpdated',
  PAYMENT_HISTORY_UPDATED: 'paymentHistoryUpdated'
};
