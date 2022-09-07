const randtoken = require('rand-token');
const jwt = require('jsonwebtoken');
const secretKey = require('./secretkey').secretKey;
const options = require('./secretkey').option;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
    sign: async (user) => {
        const payload = {
                workNumber: user.workNumber,
                name: user.name,
                authority : user.authority
        };
        const result = {
            token: jwt.sign(payload, secretKey, options),
            refreshToken: randtoken.uid(256)
        };
        return result;
    },
    verify: async (token) => {
        let decoded;
        try {
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log("invalid token");
                return TOKEN_INVALID;
            }
        }
        return decoded;
    }
}