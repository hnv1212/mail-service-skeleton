import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Message } from '../entities/message.entity';
import { MailService } from '../services';

@Controller('mail')
export class MailController {
    constructor(
        private readonly mailService: MailService
    ) { }

    @Post()
    getMails(@Req() request: Request) {
        // params = request.body
        // mailList = MailHelper.makeMailCriteria(params)
        // return mailService.getMailList(mailList, pagination)
    }

    @Get('/:id')
    show(@Body() body: any, @Param('id') id: string) {
        // params = body
        // return mailService.getMail(params, id)
    }

    @Post('draft')
    draf(@Body() body: any) {
        // params = body
        // draftMail = MailHelper.makeDraftMailModel(params)
        // return mailService.createDraft(draftMail)
    }

    @Post('send')
    send(@Body() body: Message) {
        // let params = body
        // check params.Body.Content-Type === 'HTML'
        // message = new Message(params)
        // mailResponse = mailService.sendMail(message)
        // check if mailReponse success 
        // 
    }
}
