'use strict';
module.exports = (sequelize, DataTypes) => {
  const CharacterStuff = sequelize.define('CharacterStuff', {
    character_id: DataTypes.INTEGER,
    stuff_id: DataTypes.INTEGER
  }, {});
  CharacterStuff.associate = function(models) {
    // associations can be defined here
  };
  return CharacterStuff;
};