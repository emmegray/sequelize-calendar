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
    .get(
        // isAuth,
        all,
        handleSuccess,
        handleError
    )
    .post(
        create,
        handleSuccess,
        handleError
    );

app.route('/events/:eventId')
    .get(
        get,
        handleSuccess,
        handleError
    )
    .put(
        update,
        handleSuccess,
        handleError
    )
    .delete(
        remove,
        handleSuccess,
        handleError
    )

app.listen(process.env.PORT || 5000)