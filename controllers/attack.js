const Attack = require('../models/attack');
const Weapon = require('../models/weapon');

module.exports = {

    list(req, res) {
        console.log('in find all');
        return Attack.findAll({
            include: [{
                model: Weapon,
                as: 'weapons'
            }],
        })
            .then((attacks) => res.status(200).send(attacks))
            .catch((error) => { res.status(400).send(error)});
    },

    getById(req, res)  {
        return Attack.getById(req.params.id, {
            include: [{
                model: Weapon,
                as: 'weapons'
            }],
        })
            .then((attack) => {
                if (!attack) {
                    return res.status(404).send({
                        message: 'Attack not found'
                    });
                }
                return  res.status(200).send(attack);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Attack.create({
            name: req.body.name,
            points: req.body.points,
            minLvl: req.body.minLvl
        })
            .then((attack) => res.status(201).send(attack))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Attack.getById(req.params.id, {
            include: [{
                model: Weapon,
                as: 'weapons'
            }],
        })
            .then(attack => {
                if (!attack) {
                    return res.status(404).send({
                        message: 'Attack not found'
                    });
                }
                return attack.update({
                    name: req.body.name | attack.name,
                    points: req.body.points || attack.points,
                    minLvl: req.body.minLvl || attack.minLvl,
                    weapons: req.body.weapons || attack.weapons
                })
            .then((attack) => res.status(201).send(attack))
            .catch((error) => res.status(400).send(error));

            })
    },

    delete(req, res) {
        return Attack.getById(req.params.id)
            .then(attack => {
                if (!attack) {
                    return res.status(404).send({
                        message: 'Attack not found'
                    });
                }
                return Attack
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
    }

};
