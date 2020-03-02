'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    background: DataTypes.STRING,
    pv: DataTypes.INTEGER,
    lvl: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
    weapon_id: DataTypes.INTEGER,
    armor_id: DataTypes.INTEGER,
    isEnemy: DataTypes.BOOLEAN,
    isDead: DataTypes.BOOLEAN,
    chara_class: DataTypes.STRING,
    force: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    courage: DataTypes.INTEGER,
    smartness: DataTypes.INTEGER,
    persuasion: DataTypes.INTEGER,
    endurance: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Character.associate = function(models) {
    Character.belongsTo(models.Weapon, {
      foreignKey: 'weapon_id'
    });
    Character.belongsTo(models.Armor, {
      foreignKey: 'armor_id'
    });
    Character.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    Character.belongsToMany(models.Stuff, {
      through: 'CharacterStuff',
      as: 'stuff',
      foreignKey: 'character_id'
    })


  };
  return Character;
};
