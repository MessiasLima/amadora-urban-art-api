const { Router } = require('express')
const artService = require('../services/art.service')

const router = new Router()

router.get('/', (request, response) => {
    artService.getArts(request.query).subscribe(
        arts => {
            response.send(arts)
        },
        err => {
            response.status(500)
            response.send(err)
        }
    )
})

module.exports = router