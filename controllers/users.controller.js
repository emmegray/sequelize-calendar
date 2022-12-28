const Event = require('../models/Event');
const User = require('../models/User');

async function get(req, res, next) {
  try {
    const user = await User.findByPk(req.params.userId)
    req.success = user
  } catch (error) {
    req.error = error
  }
  next()
}

async function getEvents(req, res, next) {
  try {
    const user = await User.findByPk(req.params.userId)
    const events = await Event.findAll({
      where: {
        UserId: user.id
      }
    })
    req.success = events
  } catch (error) {
    req.error = error
  }
  next()
}

module.exports = { get, getEvents };