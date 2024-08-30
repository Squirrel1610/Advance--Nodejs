const Keygrip = require('keygrip');
const keys = require('../../config/keys');


module.exports = (user) => {
    const sessionObject = {
        passport: {
            user: user._id.toString()
        }
    };
    const sessionStr = Buffer.from(JSON.stringify(sessionObject)).toString('base64');
    const keygrip = new Keygrip([keys.cookieKey]);
    const sessionSig = keygrip.sign('session=' + sessionStr);

    return {
        session: sessionStr,
        sig: sessionSig
    }
}