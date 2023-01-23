const express = require('express');
const bodyParser = require('body-parser')
const cors =require('cors');
const app = express();
require('./db/db')
const router = require('./Routes/Router')


app.use(bodyParser.urlencoded({ extended: false }))


app.use(cors())
app.use(bodyParser.json())
app.use(router)
app.listen(8080, () => {
    console.log("server started")
})



