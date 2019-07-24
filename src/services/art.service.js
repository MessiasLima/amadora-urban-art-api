const artsRepository = require('../repository/art.repository')
const { bufferCount } = require('rxjs/operators')

exports.getArts = function (query) {
    return artsRepository.getArts(query)
        .pipe(bufferCount(Number.MAX_SAFE_INTEGER))
}