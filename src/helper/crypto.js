import dotenv from 'dotenv'
import crypto from 'crypto'
dotenv.config()

const algo = process.env.ALGO,
      secret = process.env.SECRET,
      iv = process.env.IV

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
        const dec = decipher.update(encrypted, "hex", "utf8");
        str = dec;
      }

      return (str.trim().length !== 0) ? encryptedText : str
}

export {
   encrypt,
   decrypt
}