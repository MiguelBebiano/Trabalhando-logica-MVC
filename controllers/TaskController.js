const Task = require('../models/Task')

module.exports = class TaskController {

    static createTask(req,res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        //Validações
        //Processar dados

        await Task.create(task)

        res.redirect('/tasks')
    }

    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true}) // FindAll retorna um array de objetos trazendo todos os registros no banco de dados, e o raw: true transforma em um array de objetos simples

        res.render('tasks/all', { tasks })
    }

    static async removeTasks(req, res){

        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')
    }


    static async updateTasks (req, res) {

        const id = req.params.id

        const task = await Task.findOne({where: {id: id}})

        res.render('tasks/edit', {task})
    }
}

