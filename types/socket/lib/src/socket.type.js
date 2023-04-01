"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEventType = exports.SocketAuthType = exports.GetSocketEvent = void 0;
function GetSocketEvent(event) {
    return `Socket.Event.${event}`;
}
exports.GetSocketEvent = GetSocketEvent;
var SocketAuthType;
(function (SocketAuthType) {
    SocketAuthType[SocketAuthType["WIDGET"] = 0] = "WIDGET";
    SocketAuthType[SocketAuthType["AGENT"] = 1] = "AGENT";
})(SocketAuthType = exports.SocketAuthType || (exports.SocketAuthType = {}));
exports.SocketEventType = {
    WORKSPACE_UPDATED: 'workspaceUpdated',
    SUBSCRIPTION_UPDATED: 'subscriptionUpdated',
    PAYMENT_HISTORY_UPDATED: 'paymentHistoryUpdated'
};
//# sourceMappingURL=socket.type.js.map