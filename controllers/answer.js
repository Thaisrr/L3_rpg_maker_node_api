const Answer = require('../models/answer');
const Question = require('../models/question');

module.exports = {

    list(req, res) {
        console.log('in find all');
        return Answer.findAll({
            include: [{
                model: Question,
                as: 'question'
            }],
        })
            .then((answers) => res.status(200).send(answers))
            .catch((error) => { res.status(400).send(error)});
    },

    getById(req, res)  {
        return Answer.getById(req.params.id, {
            include: [{
                model: Question,
                as: 'question'
            }],
        })
            .then((answer) => {
                if (!answer) {
                    return res.status(404).send({
                        message: 'Answer not found'
                    });
                }
                return  res.status(200).send(answer);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Answer.create({
            name: req.body.name,
            points: req.body.points,
            minLvl: req.body.minLvl
        })
            .then((answer) => res.status(201).send(answer))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Answer.getById(req.params.id, {
            include: [{
                model: Question,
                as: 'question'
            }],
        })
            .then(answer => {
                if (!answer) {
                    return res.status(404).send({
                        message: 'Answer not found'
                    });
                }
                return answer.update({
                    name: req.body.name | answer.name,
                    points: req.body.points || answer.points,
                    minLvl: req.body.minLvl || answer.minLvl,
                    question: req.body.question || answer.question
                })
                    .then((answer) => res.status(201).send(answer))
                    .catch((error) => res.status(400).send(error));

            })
    },

    delete(req, res) {
        return Answer.getById(req.params.id)
            .then(answer => {
                if (!answer) {
                    return res.status(404).send({
                        message: 'Answer not found'
                    });
                }
                return Answer
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
    }

};
