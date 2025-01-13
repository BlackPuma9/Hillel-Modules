const os = require('os')

console.log('Operation system', os.platform())
console.log('Memory size', os.totalmem())
console.log('Size of free memory', os.freemem())
console.log('Time of operation system work', os.uptime())
