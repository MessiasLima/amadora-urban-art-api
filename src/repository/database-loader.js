var fs = require('fs')
var path = require('path')

const filePath = 'list.json'

function loadDatabase() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, filePath), 'utf8', function (err, data) {
            if (err) {
                console.error(err)
                reject(err)
            } else {
                resolve(JSON.parse(data).data)
            }
        })
    })
}

module.exports = loadDatabase
