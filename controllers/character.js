const Character = require('../models').Character;
const Stuff = require('../models').Stuff;
const Attack = require('../models').Attack;
const Weapon = require('../models').Weapon;
const Armor = require('../models').Armor;
const User = require('../models').User;

console.log('In character Controller');
module.exports = {
    list(req, res) {
        return Character.findAll({
            include: [
                {
                    model: Weapon,
                },
                {
                    model: Armor,
                },
                {
                    model: User,
                },
                {
                    model: Stuff,
                    as: 'stuff'
                }
            ],
        })
            .then((characters) => res.status(200).send(characters))
            .catch((error) => { res.status(400).send(error)});
    },

    getById(req, res)  {
        return Character.getById(req.params.id, {
            include: [
                {
                    model: Weapon,
                    as: 'weapon'
                },
                {
                    model: Armor,
                    as: 'armor'
                },
                {
                    model: User,
                    as: 'user'
                },
                {
                    model: Stuff,
                    as: 'stuff'
                }
            ],
        })
            .then((character) => {
                if (!character) {
                    return res.status(404).send({
                        message: 'Character not found'
                    });
                }
                return  res.status(200).send(character);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        console.log('in Chara add ');
        return Character.create({
            name: req.body.name,
            description: req.body.description,
            isTwoHands: req.body.isTwoHands,
            price: req.body.price,
            points: req.body.points,
            minLvl: req.body.minLvl,
            type: req.body.type
        })
            .then((character) => res.status(201).send(character))
            .catch((error) => res.status(400).send(error));
    },

    addWithWeaponAndArmor(req, res) {
        return Character.create({
            name: req.body.name,
            description: req.body.description,
            background: req.body.background ,
            pv: req.body.pv,
            lvl: req.body.lvl,
            xp: req.body.xp,
            isEnemy: req.body.isEnemy,
            isDead: req.body.isDead,
            chara_class: req.body.chara_class,
            force: req.body.force,
            dexterity: req.body.dexterity,
            courage: req.body.courage,
            smartness: req.body.smartness,
            persuasion: req.body.persuasion,
            endurance: req.body.endurance,
            weapon: req.body.weapon,
            armor: req.body.armor,
        })
            .then((character) => res.status(201).send(character))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Character.getById(req.params.id, {
            include: [
                {
                    model: Weapon,
                    as: 'weapon'
                },
                {
                    model: Armor,
                    as: 'armor'
                },
                {
                    model: User,
                    as: 'user'
                },
                {
                    model: Stuff,
                    as: 'stuff'
                }
            ],
        })
            .then(character => {
                if (!character) {
                    return res.status(404).send({
                        message: 'Character not found'
                    });
                }
                return character.update({
                    name: req.body.name || character.name,
                    description: req.body.description || character.description,
                    background: req.body.background || character.backgroundImage,
                    pv: req.body.pv || character.pv,
                    lvl: req.body.lvl || character.pv,
                    xp: req.body.xp ||character.xp,
                    isEnemy: req.body.isEnemy || character.isEnemy,
                    isDead: req.body.isDead || character.isDead,
                    chara_class: req.body.chara_class || character.chara_class,
                    force: req.body.force || character.force,
                    dexterity: req.body.dexterity || character.dexterity,
                    courage: req.body.courage || character.courage,
                    smartness: req.body.smartness || character.smartness,
                    persuasion: req.body.persuasion || character.persuasion,
                    endurance: req.body.endurance || character.endurance,
                    weapon: req.body.weapon || character.weapon,
                    armor: req.body.armor || character.armor
                }, {
                    include: [
                        {
                            model: Weapon,
                            as: 'weapon'
                        },
                        {
                            model: Armor,
                            as: 'armor'
                        },
                        {
                            model: User,
                            as: 'user'
                        },
                        {
                            model: Stuff,
                            as: 'stuff'
                        }
                    ],
                })
                    .then((character) => res.status(201).send(character))
                    .catch((error) => res.status(400).send(error));

            })
    },

    delete(req, res) {
        return Character.getById(req.params.id)
            .then(character => {
                if (!character) {
                    return res.status(404).send({
                        message: 'Character not found'
                    });
                }
                return Character
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
    }
};
