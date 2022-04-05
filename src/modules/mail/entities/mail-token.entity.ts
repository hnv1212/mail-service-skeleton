
const TYPE_OUTLOOK = 'outlook';
const TYPE_GOOGLE = 'google';
const META_KEY_OUTLOOK = 'office365';
const META_KEY_GOOGLE = 'googleSystem';

export class MailToken {

    protected _id: string

    protected _userId: string;

    protected _type: string;

    // text
    protected _code: string;

    // text
    protected _scope: string;

    protected _tokenType: string;

    protected _email: string;

    // text
    protected _accessToken: string;

    // text
    protected _refreshToken: string;

    // text
    protected _idToken: string;

    protected _expiresIn: number;

    // json
    protected _metadata: any;

    getAllowedTypes() {
        return [TYPE_OUTLOOK, TYPE_GOOGLE]
    }

    get id() {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get UserId() {
        return this._userId;
    }

    set UserId(userId: string) {
        this._userId = userId;
    }

    get Type() {
        return this._type.toLowerCase();
    }

    set Type(type: string) {
        this._type = type.toLowerCase()
    }

    get Code() {
        return this._code
    }

    set Code(code: string) {
        this._code = code;
    }

    get Scope() {
        return this._scope;
    }

    set Scope(scope: string) {
        this._scope = scope;
    }

    get TokenType() {
        return this._tokenType;
    }

    set TokenType(tokenType: string) {
        this._tokenType = tokenType;
    }

    get Email() {
        return this._email;
    }

    set Email(email: string) {
        this._email = email;
    }

    get AccessToken() {
        return this._accessToken;
    }

    set AccessToken(accessToken: string) {
        this._accessToken = accessToken;
    }

    get RefreshToken() {
        return this._refreshToken;
    }

    set RefreshToken(refreshToken: string) {
        this._refreshToken = refreshToken;
    }

    get IdToken() {
        return this._idToken;
    }

    set IdToken(idToken: string) {
        this._idToken = idToken;
    }

    get ExpiresIn() {
        return this._expiresIn;
    }

    set ExpiresIn(expiresIn: number) {
        this._expiresIn = expiresIn;
    }

    get Metadata() {
        return this._metadata;
    }

    set Metadata(metadata: any) {
        this._metadata = metadata;
    }

    constructor(data: [], config = []) {
        this._userId = data['user_id'] ?? '';
        this._type = data['type'] ?? '';
        this._code = data['code'] ?? '';
        this._tokenType = data['token_type'] ?? '';
        this._accessToken = data['access_token'] ?? '';
        this._refreshToken = data['refresh_token'] ?? '';
        this._idToken = data['id_token'] ?? '';
        this._email = data['email'] ?? '';
        this._expiresIn = data['expires_in'] ?? '';
    }

    getMappingOfficeConfig() {
        // return Associative Arrays typescript
        return {
            user_id: this.UserId,
            type: this.Type,
            code: this.Code,
            token_type: this.TokenType,
            access_token: this.AccessToken,
            refresh_token: this.RefreshToken,
            id_token: this.IdToken,
            email: this.Email,
            expires_in: this.ExpiresIn,
            id_token_expires_in: this.ExpiresIn
        }
    }
}