import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { MailSystemConnectDto } from '../dtos/mail-system-connect.dto';
import { TokenDataInterface } from '../interfaces/token-data.interface';
import { TokenService } from '../services';

@Controller('token')
export class TokenController {
    constructor(
        private readonly tokenService: TokenService
    ) { }
    
    @Post('connect/:type')
    connect(@Body() params: MailSystemConnectDto, @Param('type') type: string) { 
        // TODO:
        // Validate type
        // Check params.clientId || params.clientSecret || params.tokenEndpoint || params.redirectUri not empty
        // Get tokenData from TokenHelper
        // Check if tokenData has error
        // Using AccountHelper to check one type of mail system exist at one time
        // if more than one remove other token using tokenSerive.deleteExcept
        // Mapping token and save token to database => mailToken
        // return response new MailTokenModel(mailToken)
    }

    @Post('disconnect/:type')
    disconnect(@Param('type') type: string) {
        // TODO:
        // Validate type
        // data = tokenService.delete(AccountHelper.getLoggedUserId(), type)
        // Delete cache key ???
        // return response data
    }

    @Get('mail-token')
    getToken() {
        // mailToken = tokenService.getActiveToken(AccountHelper.getLoggedUserId())
        // return mailToken
    }

    private validateType(type: string) {
        // check type in array MailToken.getAllowedTypes()
    }

    private mappingToken(type, tokenData: TokenDataInterface, authCode: string) {
        // TODO:
        // idTokenData = TokenHelper.parseToken(tokenData.idToken, true)
        // switch case type to get email
        // return []: MappingTokenInterface
    }
}
