const databaseLoader = require('./database-loader')
const { from } = require('rxjs')
const { filter, flatMap } = require('rxjs/operators')

exports.getArts = function getArts(query) {
    return from(databaseLoader())
        .pipe(
            flatMap(from),
            filter(art => { return objectMatches(art, query) })
        )
}

function objectMatches(object, query) {
    let queryFields = Object.keys(query)
    let objectFields = Object.keys(object)
    for (let index = 0; index < queryFields.length; index++) {
        let queryField = queryFields[index]
        if (objectFields.includes(queryField)) {
            if (object[queryField] != query[queryField]) {
                return false
            }
        }
    }
    return true
}