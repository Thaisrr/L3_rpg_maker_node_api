const armor = require('./armor');
const attack = require('./attack');
const character = require('./character');
const stuff = require('./stuff');
const weapon = require('./weapon');
const user = require('./user');

console.log('in controller index.js');

module.exports = {
    armor,
    attack,
    character,
    stuff,
    weapon,
    user
};

