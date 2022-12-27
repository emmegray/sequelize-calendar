require('dotenv').config()
const db = require('./db')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const { all, create, get, remove, update } = require("./controllers/events.controller")
const { handleSuccess, handleError } = require('./controllers/response.controller')
const { isAuth } = require('./controllers/auth.controller')

app.route('/events')
    .get(all)
    .post(create)

app.route('/events/:eventId')
    .get(get)
    .put(update)
    .delete(remove)

app.use(
    handleError,
    handleSuccess
)

app.listen(process.env.PORT || 5000)