import { Module } from '@nestjs/common';
import { TokenController } from './modules/msgraph/controllers/token.controller';
import { CalendarController } from './modules/msgraph/controllers/calendar.controller';
import { MailController } from './modules/msgraph/controllers/mail.controller';
import { MailFolderController } from './modules/msgraph/controllers/mail-folder.controller';
import { TokenService } from './modules/msgraph/services/token.service';
import { MailService } from './modules/msgraph/services/mail.service';
import { CalendarService } from './modules/msgraph/services/calendar.service';
import { MailFolderService } from './modules/msgraph/services/mail-folder.service';

@Module({
  imports: [],
  controllers: [TokenController, CalendarController, MailController, MailFolderController],
  providers: [TokenService, MailService, CalendarService, MailFolderService],
})
export class AppModule {}
