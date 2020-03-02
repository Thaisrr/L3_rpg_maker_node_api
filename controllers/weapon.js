const Weapon = require('../models/weapon');
const Character = require('../models/character');
const Attack = require('../models/attack');

module.exports = {
    list(req, res) {
        return Weapon.findAll({
            include: [
                {
                    model: Character,
                    as: 'characters'
                },
                {
                    model: Attack,
                    as: 'attack'
                }
            ],
        })
            .then((weapons) => res.status(200).send(weapons))
            .catch((error) => { res.status(400).send(error)});
    },

    getById(req, res)  {
        return Weapon.getById(req.params.id, {
            include: [
                {
                    model: Character,
                    as: 'characters'
                },
                {
                    model: Attack,
                    as: 'attack'
                }
            ],
        })
            .then((weapon) => {
                if (!weapon) {
                    return res.status(404).send({
                        message: 'Weapon not found'
                    });
                }
                return  res.status(200).send(weapon);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Weapon.create({
            name: req.body.name,
            description: req.body.description,
            isTwoHands: req.body.isTwoHands,
            price: req.body.price,
            points: req.body.points,
            minLvl: req.body.minLvl,
            type: req.body.type
        })
            .then((weapon) => res.status(201).send(weapon))
            .catch((error) => res.status(400).send(error));
    },

    addWithAttack(req, res) {
        return Weapon.create({
            name: req.body.name,
            description: req.body.description,
            isHeavy: req.body.isHeavy,
            price: req.body.price,
            points: req.body.points,
            minLvl: req.body.minLvl,
            type: req.body.type,
            attack: req.body.attack
        })
            .then((weapon) => res.status(201).send(weapon))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Weapon.getById(req.params.id, {
            include: [
                {
                    model: Character,
                    as: 'characters'
                },
                {
                    model: Attack,
                    as: 'attack'
                }
            ],
        })
            .then(weapon => {
                if (!weapon) {
                    return res.status(404).send({
                        message: 'Weapon not found'
                    });
                }
                return weapon.update({
                    name: req.body.name || weapon.name,
                    points: req.body.points || weapon.points,
                    minLvl: req.body.minLvl || weapon.level,
                    description: req.body.description || weapon.description,
                    isTwoHands: req.body.isTwoHands || weapon.isTwoHands,
                    price: req.body.price || weapon.price,
                    type: req.body.type || weapon.type,
                    characters: req.body.characters || weapon.characters,
                    attack: req.body.attack || weapon.attack
                }, {
                    include: [
                        {
                            model: Character,
                            as: 'characters'
                        },
                        {
                            model: Attack,
                            as: 'attack'
                        }
                    ],
                })
                    .then((weapon) => res.status(201).send(weapon))
                    .catch((error) => res.status(400).send(error));

            })
    },

    delete(req, res) {
        return Weapon.getById(req.params.id)
            .then(weapon => {
                if (!weapon) {
                    return res.status(404).send({
                        message: 'Weapon not found'
                    });
                }
                return Weapon
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
    }
};
