import { IMailService } from "../mail-service.interface";

export class MSGraphMailAdapter implements IMailService {
    getMailList: () => void;
    getFolderList: () => void;
    sendMail: () => void;
    getMailAttachmentList: () => void;
    getMailAttachment: () => void;
    getMail: () => void;
    updateMail: () => void;
    createDraft: () => void;
    sendDraft: () => void;
    deleteMail: () => void;
    getMailsByConversation: () => void;

}