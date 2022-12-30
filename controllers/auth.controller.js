const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require("../models/User")
const { handleError } = require("./response.controller")

async function isAuth(req, res, next) {
    console.log(req.headers);
    // tagliare req.headers.authorization
    // jwt.verify per vedere se isAuthorized
    let isAuthorized = false;
    if (isAuthorized) {
        // salvare dal token l'user id dell'utente in req.user
        next()
    } else {
        req.error = "User not authorized"
        handleError(req, res, next)
    }
}

async function login(req, res, next) {
    try {
        console.log(req.body);
        if (!req.body.username || !req.body.password) {
            throw 'No info provided'
        }

        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!user) {
            throw 'No user'
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordCorrect) {
            throw 'Incorrect password'
        }

        req.success = {
            loggedIn: true,
            user,
            token: jwt.sign(
                {
                    username: user.username,
                    id: user.id
                },
                process.env.SECRET,
                {
                    expiresIn: 36000
                }
            )
        }
        next()
    } catch (error) {
        req.error = error.toString() || "No info provided"
        handleError(req, res, next)
    }
}

module.exports = { isAuth, login }