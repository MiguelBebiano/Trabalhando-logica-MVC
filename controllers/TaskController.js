const Task = require('../models/Task')

module.exports = class TaskController {

    static createTasl(req,res) {
        res.render('tasks/create')
    }

}

