const { handleError } = require("./response.controller")

async function isAuth(req, res, next) {
    if (req.query.token === "ciaomondo") {
        next()
    } else {
        req.error = "User not authorized"
        handleError(req, res, next)
    }
}

module.exports = { isAuth }