//Importando modulos
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// CONECTION
const conn = require('./db/conn')

// Import Models
const Task = require('./models/Task')
const taskRoutes = require('./routes/tasksRoutes')

//Set engine search
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middleware
app.use( express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', taskRoutes)










// Porta 3000
conn
    .sync()
    .then(() => {
    app.listen(3000)
    })
    .catch((error) =>
    console.log(error)
)
