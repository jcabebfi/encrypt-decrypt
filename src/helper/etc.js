import crypto from 'crypto'
const e_crypto = require('crypto'),
e_password = 'RJ45grjss14hyD9lKn76SQdaxhytazkg';

const eIV_LENGTH = 16; // For AES, this is always 16

function e_encrypt(text) {
let iv = e_crypto.randomBytes(eIV_LENGTH);
let cipher = e_crypto.createCipheriv('aes-256-cbc', e_password, iv);
let encrypted = cipher.update(text);

encrypted = Buffer.concat([encrypted, cipher.final()]);

return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function e_decrypt(text) {
let textParts = text.split(':');
let iv = Buffer.from(textParts.shift(), 'hex');
let encryptedText = Buffer.from(textParts.join(':'), 'hex');
let decipher = crypto.createDecipheriv('aes-256-cbc', e_password, iv);
let decrypted = decipher.update(encryptedText);

decrypted = Buffer.concat([decrypted, decipher.final()]);

return decrypted.toString();
}
