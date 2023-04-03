import { EmailData } from './email.data.type';

export enum EmailTemplate {
  NEW_MESSAGE = 'new-message',
  MTU_LIMIT_REACHED = 'limit-expired',
  MTU_LIMIT_ALMOST_REACHED = 'percent-remaining',
  NEW_NOTE = 'new-note',
  USER_INVITATION = 'user-invitation',
  NEW_USER_INVITATION = 'new-user-invitation',
  ONE_TIME_PASSWORD = 'one-time-password',
  SUBSCRIPTION_CANCELLED = 'subscription-cancelled',
  WORKSPACE_SCHEDULED_FOR_DELETE = 'workspace-scheduled-for-delete',
  RESET_PASSWORD = 'reset-password',
  TRIAL_EXPIRES_SOON = 'trial-expires-soon',
  WELCOME_TO_TRIAL = 'welcome-to-trial',
  CRAWL_FINISHED = 'crawl-finished',
  SUBSCRIPTION_UPDATED = 'subscription-updated',
  SUBSCRIPTION_ACTIVATED = 'subscription-activated',
  LITTLE_HELP_GUIDE = 'little-help-guide',
  EMBED_WIDGET = 'embed-widget',
  MENTION_AGENT = 'mention-agent'
}

export enum EmailSubject {
  MTU_LIMIT_REACHED = 'Your MTU limit has expired | Hoory',
  MTU_LIMIT_ALMOST_REACHED = 'Your MTU limit is about to expire | Hoory',
  ONE_TIME_PASSWORD = "Here's your one-time password! - Hoory",
  USER_INVITATION = 'Invitation to join a workspace | Hoory',
  NEW_USER_INVITATION = 'Invitation to join your team on Hoory',
  SUBSCRIPTION_CANCELLED = 'Your subscription was canceled | Hoory',
  WORKSPACE_SCHEDULED_FOR_DELETE = 'Your workspace will soon be gone | Hoory',
  RESET_PASSWORD = 'Request to reset your password | Hoory',
  TRIAL_EXPIRES_SOON = 'Only 3 days left for your free trial | Hoory',
  WELCOME_TO_TRIAL = 'Your trial starts now | Hoory',
  CRAWL_FINISHED = 'Your website crawl is complete | Hoory',
  SUBSCRIPTION_UPDATED = 'Your subscription has been renewed | Hoory',
  SUBSCRIPTION_ACTIVATED = 'Your subscription is successfully activated | Hoory',
  LITTLE_HELP_GUIDE = 'Useful guides and resources | Hoory',
  EMBED_WIDGET = 'Easily embed the Hoory widget in your website | Hoory',
  MENTION_AGENT = 'You just got mentioned | Hoory' // TODO: replace with accurate subject
}

export enum EmailReceiverType {
  ADMIN_USER = 0,
  VISITOR = 1
}
export interface EmailPayload<TData extends EmailData> {
  template: EmailTemplate;
  email: string;
  replyTo?: EmailReplyTo;
  subject: EmailSubject | string;
  data: TData;
}
export interface ReceiverInfo {
  receiverId: string;
  receiverType: EmailReceiverType;
  workspaceId: string;
}
export interface EmailWithReceiverInfoPayload<TData extends EmailData> extends EmailPayload<TData> {
  receiverInfo: ReceiverInfo;
  checkEmailSubscription: (info: ReceiverInfo) => Promise<boolean>;
}
export interface EmailReplyTo {
  address: string;
  name: string;
}

export const ReplyEmailDefaultName = 'Reply to add to the conversation';
export const NoteReplyEmailName = 'Reply to add as a note';

export enum SenderType {
  BOT = 'bot',
  AGENT = 'agent',
  VISITOR = 'visitor'
}
