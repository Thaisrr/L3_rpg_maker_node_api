'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stuff = sequelize.define('Stuff', {
    name: DataTypes.STRING,
    action: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Stuff.associate = function(models) {
    Stuff.belongsToMany(models.Character, {
      through: 'CharacterStuff',
      as: 'characters',
      foreignKey: 'stuff_id'
    })
  };
  return Stuff;
};
