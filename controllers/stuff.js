const Stuff = require('../models/stuff');
const Character = require('../models/character');

module.exports = {
    list(req, res) {
        return Stuff.findAll({
            include: [{
                model: Character,
                as: 'characters'
            }],
        })
            .then((stuffs) => res.status(200).send(stuffs))
            .catch((error) => { res.status(400).send(error)});
    },

    getById(req, res)  {
        return Stuff.getById(req.params.id, {
            include: [{
                model: Character,
                as: 'characters'
            }],
        })
            .then((stuff) => {
                if (!stuff) {
                    return res.status(404).send({
                        message: 'Stuff not found'
                    });
                }
                return  res.status(200).send(stuff);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Stuff.create({
            name: req.body.name,
            description: req.body.description,
            action: req.body.action,
        })
            .then((stuff) => res.status(201).send(stuff))
            .catch((error) => res.status(400).send(error));
    },

    addWithCharacters(req, res) {
        return Stuff.create({
            name: req.body.name,
            description: req.body.description,
            action: req.body.action,
            characters: req.body.characters
        })
            .then((stuff) => res.status(201).send(stuff))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Stuff.getById(req.params.id, {
            include: [{
                model: Character,
                as: 'characters'
            }],
        })
            .then(stuff => {
                if (!stuff) {
                    return res.status(404).send({
                        message: 'Stuff not found'
                    });
                }
                return stuff.update({
                    name: req.body.name || stuff.name,
                    description: req.body.description || stuff.description,
                    action: req.body.action || stuff.action,
                    characters: req.body.characters || stuff.characters,
                }, {
                    include: [{
                        model: Character,
                        as: 'characters'
                    }],
                })
                    .then((stuff) => res.status(201).send(stuff))
                    .catch((error) => res.status(400).send(error));

            })
    },

    delete(req, res) {
        return Stuff.getById(req.params.id)
            .then(stuff => {
                if (!stuff) {
                    return res.status(404).send({
                        message: 'Stuff not found'
                    });
                }
                return Stuff
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
    }
};
