import {SenderType} from "./email.type";

export * from './email.type';
export * from './email.data.type';

export function getAgentReplyPart(userType: SenderType) {
    return userType === SenderType.VISITOR ? '0' : '1';
}