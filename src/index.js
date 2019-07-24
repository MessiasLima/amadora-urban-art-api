const express = require('express')
const routes = require('./route')

const app = express()
const port = process.env.PORT || 3000
const gitRepositoryURL = 'https://github.com/MessiasLima/amadora-urban-art-api'

app.use('/api', routes)
app.get('/', (request, response) => {
    response.redirect(gitRepositoryURL)
})

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})