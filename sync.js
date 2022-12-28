const Event = require("./models/Event");
const User = require("./models/User");

User.hasMany(Event, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Event.belongsTo(User);

Event.sync({ alter: true })
User.sync({ alter: true })