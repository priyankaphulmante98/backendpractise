const express = require('express');

app.get('/', (req, res) => {
    res.send({"message": "get all contacts"})

})