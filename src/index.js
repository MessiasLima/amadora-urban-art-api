const express = require('express')
const routes = require('./route')

const app = express()
const port = process.env.PORT || 3000

app.use('/api', routes)
app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})