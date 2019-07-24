const artistRepository = require('../repository/artist.repository')

exports.findAll = function () {
    return artistRepository.findAll()
}