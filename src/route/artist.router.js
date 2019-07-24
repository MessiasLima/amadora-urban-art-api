const { Router } = require('express')
const artistService = require('../services/artist.service')

const router = new Router()

router.get('/', (request, response) => {
    artistService.findAll().subscribe(
        artists => { response.send(artists) },
        err => {
            response.status(500)
            response.send(err)
        }
    )
})

module.exports = router