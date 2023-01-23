const express = require('express');

const router = require('./Routes/Router')
const app = express();
require('./db/db')

app.use(express.json());
app.use(router)
app.listen(8080, () => {
    console.log("server started")
})

