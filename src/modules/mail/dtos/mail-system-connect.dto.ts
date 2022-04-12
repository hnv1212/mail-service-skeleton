import { IsEmail, IsNotEmpty } from 'class-validator'

export class MailSystemConnectDto {
    @IsNotEmpty()
    IssueUrl: string;

    @IsNotEmpty()
    ClientId: string;

    @IsNotEmpty()
    ClientSecret: string;

    @IsNotEmpty()
    RedirectUri: string;

    @IsNotEmpty()
    TokenEndpoint: string;

    @IsNotEmpty()
    Code: string;

    @IsNotEmpty()
    Type: string;
}