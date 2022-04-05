

export class TokenHelper {

    public static getToken(params = [], tokenEndpoint = '') {
        // postData = build query from params
        // data = fetchUrl(tokenEndpoint, postData)
        // return json_decode(data, 1)
    }

    public static fetchUrl() { } 
    
    public static getMailConfig(type, sub = null) {
        // get mail config from config file
        // check type and return the corresponding config 
    }

    public static getTokenParams(type, authorizationCode, redirectUrl = null) {
        // config = getMailConfig(type)
        // client = config.client
        // create token request object
    }

    public static parseToken(jwt, returnAsArray = false) {
        // $parts     = explode(".", $jwt);
        // $signature = base64_decode(self::b64url2b64(array_pop($parts)));
        // $header    = json_decode(base64_decode(self::b64url2b64($parts[0])), $returnAsArray);
        // $body      = json_decode(base64_decode(self::b64url2b64($parts[1])), $returnAsArray);
        // $payload   = implode(".", $parts);

        // return [
        //     'signature' => $signature,
        //     'header' => $header,
        //     'payload' => $payload,
        //     'body' => $body
        // ];
    }

    
}