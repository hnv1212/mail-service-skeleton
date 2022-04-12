import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosRequestConfig } from 'axios';
import { UserCredentials } from "./user-credentials";

@Injectable()
export class MSGraphService {
    constructor(private httpService: HttpService, public userCredentials: UserCredentials) { }
    
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
        const accessToken = this.userCredentials.accessToken;

        const configs: AxiosRequestConfig = {
            url: url,
            method: method,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    }
    private handleMailAttachment() {}
}