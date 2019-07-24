const databaseLoader = require('./database-loader')
const { from } = require('rxjs')
const { map, flatMap, bufferCount, filter } = require('rxjs/operators')

exports.findAll = function () {
    let artists = []
    return from(databaseLoader())
        .pipe(
            flatMap(from),
            map((entry) => entry.Autoria),
            filter(artist => {
                if (artists.includes(artist)) {
                    return false
                } else {
                    artists.push(artist)
                    return true
                }
            }),
            bufferCount(Number.MAX_SAFE_INTEGER)
        )
}