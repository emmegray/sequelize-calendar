require('dotenv').config()
const cors = require('cors')
const db = require('./db')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const events = require("./controllers/events.controller")
const users = require("./controllers/users.controller")

const { handleSuccess, handleError } = require('./controllers/response.controller')
const { isAuth, login } = require('./controllers/auth.controller')

app.route('/events')
    .get(isAuth, events.all)
    .post(isAuth, events.create)

app.route('/events/:eventId')
    .get(events.get)
    .put(events.update)
    .delete(events.remove)

app.route('/login')
    .post(login)

app.route('/users/:userId/events')
    .get(users.getEvents)

app.use(
    handleError,
    handleSuccess
)

app.listen(process.env.PORT || 5000)