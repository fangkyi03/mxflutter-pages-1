const fs = require('fs')
const path = require('path')
fs.writeFileSync(path.join('./out/index.html'), fs.readFileSync('./out/index/index.html'))