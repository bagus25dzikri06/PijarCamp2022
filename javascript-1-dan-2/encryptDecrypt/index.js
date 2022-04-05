const CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');

const kriptografi = (kata, callback) => {
    return callback(kata)
}

const encryption = (word) => {
    //return CryptoJS.AES.encrypt(word, 'secret key 123').toString()
    return bcrypt.hash(word, 10, (err, hash) => {
        if (err) {
            return err.message
        }
        return hash
    })
}

const decryption = (word) => {
    return CryptoJS.AES.decrypt(word, 'secret key 123').toString(CryptoJS.enc.Utf8)
}

console.log(kriptografi('Welcome', encryption))
//console.log(kriptografi('U2FsdGVkX19EnPQ5nsCIR5d2A2fgPQedj+DfesHGaJ8=', decryption))