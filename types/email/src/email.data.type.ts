export interface EmailData {
  unsubscriptionUrl?: string;
  workspace_id: string;
}

export interface ResetPasswordEmailData extends EmailData {
  firstName: string;
  ipAddress: string;
  country: string;
  timeOfRequest: string;
  changePasswordId: string;
}

export interface OTPEmailData extends EmailData {
  uniqueId: string;
  ownerFirstName: string;
  oneTimePassword: string;
}

export interface WelcomeToTrialEmailData extends EmailData {
  workspaceSlug: string;
  workspaceColor: string;
  ownerFirstName: string;
}

export interface SubscriptionCanceledEmailData extends EmailData {
  workspaceSlug: string;
  periodEnd: string;
  ownerFirstName: string;
}

export interface WorkspaceScheduledForDeleteEmailData extends EmailData {
  workspaceSlug: string;
  deletionDate: string;
  ownerFirstName: string;
}

export interface TrialExpiredEmailData extends EmailData {
  workspaceSlug: string;
  periodEnd: number;
  ownerFirstName: string;
}

export interface UserInvitationEmailData extends EmailData {
  receiverFirstName: string;
  workspaceSlug: string;
  senderEmail: string;
  senderFirstName: string;
  inviteToken: string;
}

export interface NewUserInvitationEmailData extends EmailData {
  workspaceSlug: string;
  senderEmail: string;
  senderFirstName: string;
  inviteToken: string;
}

export interface CrawlFinishedEmailData extends EmailData {
  firstName: string;
  knowledgeBaseUrl: string;
}

export interface VisitorEmailData {
  createdAt?: Date;
  _id: string;
  firstName: string;
  lastName: string;
  locationTime: number;
  city: string;
  country: string;
  workspaceId: string;
  websiteDomain: string;
  updatedAt?: Date;
  avatar: string;
  phone: string;
  email: string;
  __v: number;
}

export interface AdminEmailData {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export interface MessageEmailData {
  _id: string;
  createdAt: string;
  createdByType: string;
  type: number;
  body: string;
  createdBy: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    type: number;
  };
  actions: string;
  draft: string;
  conversation: string;
  updatedAt: string;
  __v: number;
}

export interface NewMessageOrNoteEmailData extends EmailData {
  title: string;
  workspace: {
    slug: string;
    color: string;
  };
  userId: string;
  conversationId: string;
  visitorToken: string;
  admins: AdminEmailData[];
  messages: MessageEmailData[];
  visitor: VisitorEmailData;
}

export interface MentionAgentData extends EmailData {
  slug: string;
  conversationId: string;
  agentFirstName: string;
  agentLastName: string;
  mentionedFirstName: string;
  mentionedLastName: string;
  visitorFirstName: string;
  visitorLastName: string;
  message: string;
}

export interface MtuEmailData extends EmailData {
  ownerFirstName: string;
  workspaceSlug: string;
}

export interface SubscriptionUpdatedEmailData extends EmailData {
  ownerFirstName: string;
  workspaceSlug: string;
  planType: string;
}

export interface SubscriptionActivatedEmailData extends EmailData {
  ownerFirstName: string;
  workspaceSlug: string;
  planType: string;
}
export interface LittleHelpGuideEmailData extends EmailData {
  firstName: string;
}
export interface EmbedWidgetEmailData extends EmailData {
  ownerFirstName: string;
  visitorEmbedCode: string;
  userEmbedCode: string;
}
