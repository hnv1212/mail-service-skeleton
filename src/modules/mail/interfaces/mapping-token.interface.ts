export interface MappingTokenInterface {
    TokenType: string;
    AccessToken: string;
    RefreshToken: string;
    IdToken: string;
    ExpiresIn: number;
    Scope: string[];
    Email: string;
    Code: string;
}