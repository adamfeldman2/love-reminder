const crypto = require('crypto');
const keys = require('../config/keys');
const key = keys.encryptionKey;
const algorithm = 'aes-256-ctr';
const ivLength = 16;

const encrypt = (string) => {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, new Buffer(key), iv);
  let encrypted = cipher.update(string);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

const decrypt = (string) => {
  const stringParts = string.split(':');
  const iv = new Buffer(stringParts.shift(), 'hex');
  const encryptedstring = new Buffer(stringParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(algorithm, new Buffer(key), iv);
  let decrypted = decipher.update(encryptedstring);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};

module.exports = { encrypt, decrypt };
