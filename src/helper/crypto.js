const crypto = require("crypto")

const algo = 'aes-256-gcm',
      secret = '3zTvzr3p67VC61jmV54rIYu1545x4TlY',
      iv = '60iP0h6vJoEa'

function encrypt(text) {
   if (text) {
    var cipher = crypto.createCipheriv(algo, secret, iv);
    var encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    var tag = cipher.getAuthTag();
    return encrypted;
  }
}

function decrypt(encryptedText) {
      let str

      if (encryptedText) {
        const decipher = crypto.createDecipheriv(algo, secret, iv);
        const dec = decipher.update(encryptedText, "hex", "utf8");
        str = dec;
      }

      return str
}

module.exports = {
  encrypt,
  decrypt
}