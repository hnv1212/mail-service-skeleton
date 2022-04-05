import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { CalendarController, MailController, TokenController } from "./controllers";
import { CalendarService, MailService, TokenService } from "./services";


@Module({
    imports: [HttpModule],
    controllers: [TokenController, CalendarController, MailController],
    providers: [TokenService, MailService, CalendarService],
}) 
export class MailModule {}