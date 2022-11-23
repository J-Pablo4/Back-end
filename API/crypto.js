const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('Man oh man do I love node!').digest('hex');

if(hash === hash2)
{
    console.log('Eureka, si funciono');
}