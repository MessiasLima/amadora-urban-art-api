const neighborhoodRepository = require('../repository/neighborhood.repository')

exports.findAll = function () {
    return neighborhoodRepository.findAll()
}