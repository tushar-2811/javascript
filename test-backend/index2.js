import crypto from 'crypto';

const input = "tushar";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);