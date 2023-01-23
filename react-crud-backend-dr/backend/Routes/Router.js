const express= require('express');
const router = express.Router()
const controller = require('../Controller/taskContoller')

router.post('/task/post', controller.postTask )
router.get('/task', controller.getFunction)
router.get('/task/:id', controller.getSingleFunction)
router.put('/task/update/:id', controller.updateFunction )
router.delete('/task/delete/:id', controller.deleteFunction )
module.exports = router