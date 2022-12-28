require('dotenv').config()
const db = require('./db')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const events = require("./controllers/events.controller")
const users = require("./controllers/users.controller")

const { handleSuccess, handleError } = require('./controllers/response.controller')
const { isAuth } = require('./controllers/auth.controller')

app.route('/events')
    .get(events.all)
    .post(events.create)

app.route('/events/:eventId')
    .get(events.get)
    .put(events.update)
    .delete(events.remove)

app.route('/users/:userId/events')
    .get(users.getEvents)

app.use(
    handleError,
    handleSuccess
)

app.listen(process.env.PORT || 5000)