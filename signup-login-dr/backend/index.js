const express = require('express')
require('./db/db')
const bodyParser = require('body-parser')

const router = require('./Routes/Router')


const app = express()
// app.use(bodyParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// app.use(express.json())
app.use(router)

app.listen(8080, () => {
    console.log("server started 8080")
})