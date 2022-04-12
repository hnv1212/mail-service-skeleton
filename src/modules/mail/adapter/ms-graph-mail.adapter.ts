
import { IMailService } from "../interfaces";
import { MSGraphAdapter } from "./ms-graph.adapter";


export class MSGraphMailAdapter extends MSGraphAdapter implements IMailService {
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