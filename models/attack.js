'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attack = sequelize.define('Attack', {
    name: DataTypes.STRING,
    points: DataTypes.INTEGER,
    minLvl: DataTypes.INTEGER
  }, {});
  Attack.associate = function(models) {
    // associations can be defined here
    Attack.hasMany(models.Weapon, {
      foreignKey: 'attack_id',
      as: 'weapons'
    })
  };
  return Attack;
};
