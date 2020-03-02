'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterAttack = sequelize.define('CharacterAttack', {
    character_id: DataTypes.INTEGER,
    attack_id: DataTypes.INTEGER
  }, {});
  CharacterAttack.associate = function(models) {
    // associations can be defined here
  };
  return CharacterAttack;
};