import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MailToken } from '../entities/mail-token.entity';
import { MappingTokenInterface } from '../interfaces/mapping-token.interface';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class TokenService {
  constructor(
    // @InjectRepository(MailToken) private mailTokenRepository: Repository<MailToken>
    private httpService: HttpService,
  ) {}

  async getTokenFormAuthCode(tokenRequest: {
    grant_type: string;
    code: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
    token_endpoint: string;
  }) {
    const configs: AxiosRequestConfig = {
      url: tokenRequest.token_endpoint,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: new URLSearchParams({
        client_id: tokenRequest.client_id,
        code: tokenRequest.code,
        redirect_uri: tokenRequest.redirect_uri,
        grant_type: tokenRequest.grant_type,
        client_secret: tokenRequest.client_secret,
      }),
    };

    const response = await this.httpService.request(configs).toPromise();
    return response.data;
  }

  save(userId: any, type: any, params: MappingTokenInterface) {
    // TODO:
    // token = Repository<MailToken>.findOneBy({userId, type})
    // check if token exist then update token info
    // return token
  }

  delete(userId, type) {
    // get token by userId and type
    // delete token
    // return true
  }

  deleteExcept(userId, type) {}

  getActiveToken(userId) {
    // get token by userId in MailToken
    // return token
  }

  get(userId, type) {
    // get token
    // return token: MailTokenn
  }
}
