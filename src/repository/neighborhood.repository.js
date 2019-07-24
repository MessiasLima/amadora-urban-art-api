const databaseLoader = require('./database-loader')
const { from } = require('rxjs')
const { map, flatMap, bufferCount, filter } = require('rxjs/operators')

exports.findAll = function () {
    let neighborhoods = []
    return from(databaseLoader())
        .pipe(
            flatMap(from),
            map((entry) => entry.Freguesia),
            filter(neighborhood => {
                if (neighborhoods.includes(neighborhood)) {
                    return false
                } else {
                    neighborhoods.push(neighborhood)
                    return true
                }
            }),
            bufferCount(Number.MAX_SAFE_INTEGER)
        )
}