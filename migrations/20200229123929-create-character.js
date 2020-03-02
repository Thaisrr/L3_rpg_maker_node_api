'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      background: {
        type: Sequelize.STRING
      },
      pv: {
        type: Sequelize.INTEGER
      },
      lvl: {
        type: Sequelize.INTEGER
      },
      xp: {
        type: Sequelize.INTEGER
      },
      weapon_id: {
        type: Sequelize.INTEGER
      },
      armor_id: {
        type: Sequelize.INTEGER
      },
      isEnemy: {
        type: Sequelize.BOOLEAN
      },
      isDead: {
        type: Sequelize.BOOLEAN
      },
      chara_class: {
        type: Sequelize.STRING
      },
      force: {
        type: Sequelize.INTEGER
      },
      dexterity: {
        type: Sequelize.INTEGER
      },
      courage: {
        type: Sequelize.INTEGER
      },
      smartness: {
        type: Sequelize.INTEGER
      },
      persuasion: {
        type: Sequelize.INTEGER
      },
      endurance: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Characters');
  }
};