export declare function GetSocketEvent(event: string): string;
export declare enum SocketAuthType {
    WIDGET = 0,
    AGENT = 1
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
export declare const SocketEventType: {
    WORKSPACE_UPDATED: string;
    SUBSCRIPTION_UPDATED: string;
    PAYMENT_HISTORY_UPDATED: string;
};
