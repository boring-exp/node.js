const fs = require('node:fs')
const path = require('node:path')
const upload = path.join(__dirname, './upload/')

function saveFile(fileName) {
    const stm = fs.createWriteStream(`${upload}${path.sep}${fileName}`, {flags: 'w'})
    return stm;
}

module.exports = {
    saveFile
}