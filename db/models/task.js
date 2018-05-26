'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('tasks', {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    finished: DataTypes.BOOLEAN
  }, {});
  task.associate = function (models) {
    // associations can be defined here
  };
  return task;
};