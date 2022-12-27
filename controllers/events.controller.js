const Event = require('../models/Event');

async function all(req, res, next) {
    try {
        const events = await Event.findAll();
        req.success = events;
    } catch (error) {
        req.error = error;
    }
    next();
}

async function create(req, res, next) {
    try {
        const event = await Event.create({
            title: req.body.title,
            description: req.body.description,
            date: new Date(req.body.date)
        })

        req.success = event
    } catch (error) {
        req.error = error
    }
    next()
}

async function get(req, res, next) {
    try {
        const event = await Event.findByPk(req.params.eventId)
        req.success = event
    } catch (error) {
        req.error = error
    }
    next()
}

async function remove(req, res, next) {
    try {
        const event = await Event.findByPk(req.params.eventId)
        event.destroy()
        req.success = 'Ok'
    } catch (error) {
        req.error = error
    }
    next()
}

async function update(req, res, next) {
    try {
        const event = await Event.update({
            title: req.body?.title,
            description: req.body?.description,
            date: req.body.date ? new Date(req.body.date) : undefined
        }, {
            where: {
                id: req.params.eventId
            }
        })
        req.success = event
    } catch (error) {
        req.error = error
    }
    next()
}

module.exports = { all, create, get, remove, update };
