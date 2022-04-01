import { Injectable } from '@nestjs/common';
import { MailToken } from '../entities/mail-token.entity';
import { MappingTokenInterface } from '../interfaces/mapping-token.interface';

@Injectable()
export class TokenService {
    constructor(
        // @InjectRepository(MailToken) private mailTokenRepository: Repository<MailToken>
    ) { }
    
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

    deleteExcept(userId, type) {

    }

    getActiveToken(userId) {
        // get token by userId in MailToken
        // return token
    }

    get(userId, type) {
        // get token
        // return token: MailTokenn
    }
}
