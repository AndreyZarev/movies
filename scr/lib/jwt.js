const jwt = require('jsonwebtoken');


function sign(playload, secretOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {

        jwt.sign(playload, secretOrPrivateKey, options, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    });

    return promise;
}

module.exports = {
    sign,
}