import { Attachment, ItemBody, Recipient } from "../interfaces";


export class Message {
    // Id: string;
    // From: Recipient;
    // Attachments: Attachment;
    // CreatedDateTime: string;
    // ChangeKey: string;
    // ReceivedDateTime: string;
    // SentDateTime: string;
    // HasAttachments: boolean;
    // InternetMessageId: string;
    // Subject: string;
    // Body: ItemBody;
    // UniqueBody: ItemBody;
    // BodyPreview: string;
    // Importance: string;
    // ParentFolderId: string;
    // Sender: Recipient;
    // CcRecipients: Recipient;
    // BccRecipients: Recipient;
    // ReplyTo: Recipient;
    // ToRecipients: Recipient;
    // ConversationId: string;
    // IsDeliveryReceiptRequested: boolean;
    // IsReadReceiptRequested: boolean;
    // IsRead: boolean;
    // IsDraft: boolean;
    // WebLink: string;
    // InferenceClassification: string;
    // PartnerId: string;
    // TemplateId: string;

    constructor(
        public Id: string,
        public From: Recipient,
        public Attachments: Attachment,
        public CreatedDateTime: string,
        public ChangeKey: string,
        public ReceivedDateTime: string,
        public SentDateTime: string,
        public HasAttachments: boolean,
        public InternetMessageId: string,
        public Subject: string,
        public Body: ItemBody,
        public UniqueBody: ItemBody,
        public BodyPreview: string,
        public Importance: string,
        public ParentFolderId: string,
        public Sender: Recipient,
        public CcRecipients: Recipient,
        public BccRecipients: Recipient,
        public ReplyTo: Recipient,
        public ToRecipients: Recipient,
        public ConversationId: string,
        public IsDeliveryReceiptRequested: boolean,
        public IsReadReceiptRequested: boolean,
        public IsRead: boolean,
        public IsDraft: boolean,
        public WebLink: string,
        public InferenceClassification: string,
        public PartnerId: string,
        public TemplateId: string,
    ) { }
}