'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    name: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    token: DataTypes.STRING,
    password: DataTypes.STRING,
    mail: DataTypes.STRING,
    role: DataTypes.STRING,
    tel: DataTypes.STRING,
    money: DataTypes.FLOAT
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Character, {
      foreignKey: 'character_id',
      as: 'characters'
    })
  };
  return User;
};
