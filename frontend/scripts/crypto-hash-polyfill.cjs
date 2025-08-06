const crypto = require('node:crypto');

if (typeof crypto.hash !== 'function') {
  crypto.hash = (algorithm, data, encoding) =>
    crypto.createHash(algorithm).update(data).digest(encoding);
}

