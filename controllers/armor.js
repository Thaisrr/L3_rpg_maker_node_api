const Armor = require('../models/armor');
const Character = require('../models/character');

module.exports = {
    findAll(req, res) {
        return Armor.findAll({
            include: [{
                model: Character,
                as: 'characters'
            }],
        })
            .then((armors) => res.status(200).send(armors))
            .catch((error) => { res.status(400).send(error)});
    },

    getById(req, res)  {
        return Armor.getById(req.params.id, {
            include: [{
                model: Character,
                as: 'characters'
            }],
        })
            .then((armor) => {
                if (!armor) {
                    return res.status(404).send({
                        message: 'Armor not found'
                    });
                }
                return  res.status(200).send(armor);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Armor.create({
            name: req.body.name,
            description: req.body.description,
            isHeavy: req.body.isHeavy,
            price: req.body.price,
            points: req.body.points,
            minLvl: req.body.minLvl
        })
            .then((armor) => res.status(201).send(armor))
            .catch((error) => res.status(400).send(error));
    },

    addWithCharacters(req, res) {
        return Armor.create({
            name: req.body.name,
            description: req.body.description,
            isHeavy: req.body.isHeavy,
            price: req.body.price,
            points: req.body.points,
            minLvl: req.body.minLvl,
            characters: req.body.characters
        })
            .then((armor) => res.status(201).send(armor))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Armor.getById(req.params.id, {
            include: [{
                model: Character,
                as: 'characters'
            }],
        })
            .then(armor => {
                if (!armor) {
                    return res.status(404).send({
                        message: 'Armor not found'
                    });
                }
                return armor.update({
                    name: req.body.name || armor.name,
                    points: req.body.points || armor.points,
                    minLvl: req.body.minLvl || armor.level,
                    description: req.body.description || armor.description,
                    isHeavy: req.body.isHeavy || armor.isHeavy,
                    price: req.body.price || armor.price,
                    characters: req.body.characters || armor.characters,
                }, {
                        include: [{
                            model: Character,
                            as: 'characters'
                        }],
                    })
                    .then((armor) => res.status(201).send(armor))
                    .catch((error) => res.status(400).send(error));

            })
    },

    delete(req, res) {
        return Armor.getById(req.params.id)
            .then(armor => {
                if (!armor) {
                    return res.status(404).send({
                        message: 'Armor not found'
                    });
                }
                return Armor
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
    }
};
