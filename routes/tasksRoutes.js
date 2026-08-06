//Importando express e modulos dele: Router
const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')
const Task = require('../models/Task')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTasks)
router.get('/edit/:id', TaskController.updateTasks)
router.post('/edit', TaskController.updateTasksPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)

module.exports = router

