function handleSuccess(req, res, next) {
    if (req.success) {
        res.status(200).json({
            route: req.route.path,
            method: req.method,
            status: 200,
            data: req.success
        })
    } else {
        next()
    }
}

function handleError(req, res, next) {
    if (req.error) {
        res.status(500).json({
            route: req.route.path,
            method: req.method,
            status: 500,
            error: req.error
        })
    } else {
        next()
    }
}

module.exports = {
    handleError,
    handleSuccess
}