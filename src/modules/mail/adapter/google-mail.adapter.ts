import { IMailService } from "../interfaces";
import { GoogleAdapter } from "./google.adapter";


export class GoogleMailAdapter extends GoogleAdapter implements IMailService {
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