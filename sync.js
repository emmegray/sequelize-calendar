const Event = require("./models/Event");
const User = require("./models/User");

Event.sync({ alter: true })
User.sync({ alter: true })
