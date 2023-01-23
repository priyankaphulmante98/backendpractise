const  express = require('express');
const router = express.Router();
const controller = require('../controller/taskController')


router.post('/task/post', controller.postFunction)

router.get('/task', controller.getFunction)

router.get('/task/:id', controller.getSingleFunction)

router.patch('/task/update/:id', controller.updateFunction)

router.delete('/task/delete/:id', controller.deleteFunction)

module.exports = router
