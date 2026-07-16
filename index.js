//Importando modulos
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// CONECTION
const conn = require('./db/conn')

// Import Models
const Task = require('./models/Task')

//Set engine search
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//middleware
app.use( express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use(express.static('public'))


conn
    .sync()
    .then(() => {
    app.listen(3000)
    })
    .catch((error) =>
    console.log(error)
)
