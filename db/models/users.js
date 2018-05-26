'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone: DataTypes.INTEGER
  }, {});
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};