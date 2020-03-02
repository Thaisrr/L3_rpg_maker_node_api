'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weapon = sequelize.define('Weapon', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    points: DataTypes.INTEGER,
    isTwoHands: DataTypes.BOOLEAN,
    attack_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    minLvl: DataTypes.INTEGER
  }, {});
  Weapon.associate = function(models) {
    Weapon.hasMany(models.Character, {
      foreignKey: 'weapon_id',
      as: 'characters'
    });
    Weapon.belongsTo(models.Attack, {
      foreignKey: 'weapon_id'
    } )
  };
  return Weapon;
};
