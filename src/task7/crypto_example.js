const crypto = require('crypto')

const sentence = 'You need to hash this information'

const hash = crypto.createHash('sha256').update(sentence).digest('hex')

console.log(`Your hash is ${hash}`)