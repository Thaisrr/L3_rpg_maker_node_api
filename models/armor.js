'use strict';
module.exports = (sequelize, DataTypes) => {
  const Armor = sequelize.define('Armor', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    points: DataTypes.INTEGER,
    minLvl: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    isHeavy: DataTypes.BOOLEAN
  }, {});
  Armor.associate = function(models) {
    Armor.hasMany(models.Character, {
      foreignKey: 'armor_id',
      as: 'characters'
    })
  };
  return Armor;
};
