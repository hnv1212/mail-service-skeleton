import { HttpService } from "@nestjs/axios";
import { AxiosRequestConfig } from 'axios';

export class MSGraphService {
    constructor(private httpService: HttpService) { }
    
    async createCalendarEvent() { }
    async getEvent() { }
    async updateEvent() { }
    async deleteEvent() { }
    async getEventList() { }
    
    async getMailList() { }
    async getMailFolderList() { }
    async getCalendarList() { }
    async getChildMailFolderList() { }
    async getMail() { }
    async getMailAttachmentList() { }
    async getMailAttachment() { }
    async sendMail() { }
    async createNewDraft() { }
    async createReplyDraft() { }
    async createForwardDraft() { }
    async sendDraft() { }
    async deleteMail() { }
    async updateMail() { }
    
    async getTaskList() { }
    async createTask() { }
    async updateTask() { }
    async deleteTask() { }
    async completedTask() { }
    async getAllTask() {}
    
    private send(url, method, data, options = []) { 
        const configs: AxiosRequestConfig = {
            url: url,
            method: method,
            
        }
    }
    private handleMailAttachment() {}
}