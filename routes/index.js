const express = require('express');
const router = express.Router();

const attackController = require('../controllers/attack');
const armorController = require('../controllers/armor');
const characterController = require('../controllers/character');
const stuffController = require('../controllers/stuff');
const userController = require('../controllers/user');
const weaponController = require('../controllers/weapon');

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


module.exports = router;
