const { URL } = require('url')

const exampleUrl = new URL('https://example.com/path?name=Node.js&type=IT')
console.log('Protocol', exampleUrl.protocol)
console.log('Path name', exampleUrl.pathname)
console.log('Search parameters', exampleUrl.searchParams.get('name'))