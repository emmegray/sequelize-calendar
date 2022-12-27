const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    description: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = Event;