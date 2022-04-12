import { IMailService } from "../interfaces";


export class MailServiceProvider implements IMailService{
    protected adapter: any;

    constructor(adapter = null) {
        this.adapter = adapter;
    }

    get Adapter() {
        // check token type ?? (where to get token type)
        // if type === OUTLOOK => adapter = new MSGraphMailAdapter()
        // else if type === GOOGLE => adapter = new GoogleMailAdapter()
        return this.adapter
    }

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