import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { MailSystemConnectDto } from '../dtos/mail-system-connect.dto';
import { MailToken } from '../entities/mail-token.entity';
import { TokenDataInterface } from '../interfaces/token-data.interface';
import { TokenService } from '../services';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('connect/:type')
  async connect(
    @Body() params: MailSystemConnectDto,
    @Param('type') type: string,
  ) {
    if (!this.validateType(type)) {
      throw new HttpException('Invalid type', 400);
    }

    const tokenRequest = {
      grant_type: 'authorization_code',
      code: params.Code,
      client_id: params.ClientId,
      client_secret: params.ClientSecret,
      redirect_uri: params.RedirectUri,
      token_endpoint: params.TokenEndpoint,
    };

    let tokenData = await this.tokenService.getTokenFormAuthCode(tokenRequest);
      return tokenData;
      
    // Get tokenData from TokenHelper
    // Check if tokenData has error
    // Using AccountHelper to check one type of mail system exist at one time
    // if more than one remove other token using tokenSerive.deleteExcept
    // Mapping token and save token to database => mailToken
    //   decode idToken to get user email and save to database
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
    return MailToken.getAllowedTypes().includes(type);
  }

  private mappingToken(type, tokenData: TokenDataInterface, authCode: string) {
    // TODO:
    // idTokenData = TokenHelper.parseToken(tokenData.idToken, true)
    // switch case type to get email
    // return []: MappingTokenInterface
  }
}
