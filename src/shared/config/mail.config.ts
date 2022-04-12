import { registerAs } from '@nestjs/config';

export interface MailConfigInterface {

}

export const mailConfigToken = 'mail.config'

export const mailConfig = registerAs(mailConfigToken, ():any => ({
    msgraph: {
        server: {
            issueUrl: '',
            apiUrl: '',
            tokenEndpoint: '',
            authorizationEndpoint: ''
        },
        client: {
            clientId: process.env.MS_CLIENT_ID,
            clientName: process.env.MS_CLIENT_NAME,
            clientSecret: process.env.MS_CLIENT_SECRET,
            clientScope: process.env.MS_SCOPE
        }
    }, 
    googleSystem: {
        client: {
            googleClientId: process.env.GOOGLE_MAIL_CLIENT_ID,
            googleClientName: process.env.GOOGLE_MAIL_CLIENT_NAME,
            googleClientSecret: process.env.GOOGLE_MAIL_CLIENT_SECRET,
            googleClientScope: process.env.GOOGLE_MAIL_CLIENT_SCOPE
        }
    }
}))