const fs = require('node:fs')
const path = require('node:path')

const sourceFile = path.join(__dirname, './test.txt');
const aimFile = path.join(__dirname, './aim.txt');

const readableStream = fs.createReadStream(sourceFile)

// 如果目标文件存在，我们就覆盖，如果不存在就创建
const writableStream = fs.createWriteStream(aimFile, {flags: 'w'})

// 复制功能
readableStream.pipe(writableStream)
