require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const router = express.Router();

const attackController = require('./controllers/attack');
const armorController = require('./controllers/armor');
const characterController = require('./controllers/character');
const stuffController = require('./controllers/stuff');
const userController = require('./controllers/user');
const weaponController = require('./controllers/weapon');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
//app.use('/users', require('./users/users.controller'));
app.use('/', require('./routes/index'));


// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 8000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
