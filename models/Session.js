const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./User');

const Session = sequelize.define('session', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Session.belongsTo(User, { foreignKey: 'userId' });

module.exports = Session;
