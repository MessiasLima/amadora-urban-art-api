const { Router } = require('express')
const neighborhoodService = require('../services/neighborhood.service')

const router = new Router()

router.get('/', (request, response) => {
    neighborhoodService.findAll().subscribe(
        neighborhoods => { response.send(neighborhoods) },
        err => {
            console.error(err)
            response.status(500)
            response.send(err)
        }
    )
})

module.exports = router