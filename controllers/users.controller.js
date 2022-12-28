const User = require('../models/User');

async function all(req, res, next) {
  try {
    const users = await User.findAll();
    req.success = users;
  } catch (error) {
    req.error = error;    
  }
  next();

}

async function create(req, res, next) {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })

    req.success = user
  } catch (error) {
    req.error = error
  }
  next()

}

async function get(req, res, next) {
  try {
    const user = await User.findByPk(req.params.userId)
    req.success = user
  } catch (error) {
    req.error = error
  }
  next()

}

async function remove(req, res, next) {
  try {
    const user = await User.findByPk(req.params.userId)
    user.destroy()
    req.success = 'Ok'
  } catch (error) {
    req.error = error
  }
  next()

}

async function update(req, res, next) {
  try {
    const user = await User.update({
      firstName: req.body?.firstName,
      lastName: req.body?.lastName,
      email: req.body?.email,
      password: req.body?.password
    }, {
      where: {
        id: req.params.userId
      }
    })
    req.success = user
  } catch (error) {
    req.error = error
  }
  next()

}

module.exports = { all, create, get, remove, update };