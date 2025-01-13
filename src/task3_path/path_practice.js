const path = require('path')

const pathName = 'src/readme/../task2_path/readme.txt'

const normalizePath = path.normalize(pathName)
const extension = path.extname(pathName)

console.log(normalizePath)
console.log(extension)