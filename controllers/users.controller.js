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

User.hasMany(Event, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = { get };