const { Router } = require('express')
const artRouter = require('./art.router')
const artistRouter = require('./artist.router')
const neighborhoodRouter = require('./neighborhood.router')

const router = new Router()

router.use('/art', artRouter)
router.use('/artist', artistRouter)
router.use('/neighborhood', neighborhoodRouter)

module.exports = router