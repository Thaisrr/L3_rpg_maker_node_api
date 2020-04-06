const express = require('express');
const router = express.Router();

const attackController = require('../controllers/attack');
const armorController = require('../controllers/armor');
const characterController = require('../controllers/character');
const stuffController = require('../controllers/stuff');
const userController = require('../controllers/user');
const weaponController = require('../controllers/weapon');
const answerController = require('../controllers/answer');
const chapterController = require('../controllers/chapter');
const courseController = require('../controllers/course');
const pathController = require('../controllers/path');
const questionController = require('../controllers/question');
const scoreController = require('../controllers/score');
const skillController = require('../controllers/skill');


console.log('in index.js routes');

/* Attack router */
router.get('/attack', attackController.list);
router.get('/attack/:id', attackController.getById);
router.post('/attack', attackController.add);
router.put('/attack/:id', attackController.update);
router.delete('/attack/:id', attackController.delete);

/* Armor router */
router.get('/armor', armorController.findAll);
router.get('/armor/:id', armorController.getById);
router.post('/armor', armorController.add);
router.put('/armor/:id', armorController.update);
router.delete('/armor/:id', armorController.delete);


/* Character router */
router.get('/character', characterController.list);
router.get('/character/:id', characterController.getById);
router.post('/character', characterController.add);
router.put('/character/:id', characterController.update);
router.delete('/character/:id', characterController.delete);


/* Stuff router */
router.get('/stuff', stuffController.list);
router.get('/stuff/:id', stuffController.getById);
router.post('/stuff', stuffController.add);
router.put('/stuff/:id', stuffController.update);
router.delete('/stuff/:id', stuffController.delete);


/* Weapon router */
router.get('/weapon', weaponController.list);
router.get('/weapon/:id', weaponController.getById);
router.post('/weapon', weaponController.add);
router.put('/weapon/:id', weaponController.update);
router.delete('/weapon/:id', weaponController.delete);

/* User router */
router.post('/user/authenticate', userController.authenticate);
router.get('/user', userController.list);
router.get('/user/:id', userController.getById);
router.post('/user', userController.add);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

/* Answer router */
router.get('/answer', answerController.list);
router.get('/answer/:id', answerController.getById);
router.post('/answer', answerController.add);
router.put('/answer/:id', answerController.update);
router.delete('/answer/:id', answerController.delete);

/* Answer router */
router.get('/chapter', chapterController.list);
router.get('/chapter/:id', chapterController.getById);
router.post('/chapter', chapterController.add);
router.put('/chapter/:id', chapterController.update);
router.delete('/chapter/:id', chapterController.delete);

/* Course router */
router.post('/course', courseController.add);
router.get('/course', courseController.findAll);
router.get('/course/:id', courseController.getById);
router.post('/course', courseController.add);
router.put('/course/:id', courseController.update);
router.delete('/course/:id', courseController.delete);


/* Answer router */
router.get('/path', pathController.findAll);
router.get('/path/:id', pathController.getById);
router.post('/path', pathController.add);
router.put('/path/:id', pathController.update);
router.delete('/path/:id', pathController.delete);

/* Answer router */
router.get('/question', questionController.list);
router.get('/question/:id', questionController.getById);
router.post('/question', questionController.add);
router.put('/question/:id', questionController.update);
router.delete('/question/:id', questionController.delete);

/* Answer router */
router.get('/score', scoreController.list);
router.get('/score/:id', scoreController.getById);
router.post('/score', scoreController.add);
router.put('/score/:id', scoreController.update);
router.delete('/score/:id', scoreController.delete);

/* Answer router */
router.get('/skill', skillController.list);
router.get('/skill/:id', skillController.getById);
router.post('/skill', skillController.add);
router.put('/skill/:id', skillController.update);
router.delete('/skill/:id', skillController.delete);






module.exports = router;
