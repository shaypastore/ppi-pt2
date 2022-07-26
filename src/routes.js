const express = require('express');
const routes = express.Router();
const PokeController = require('./controllers/PokeController');
const UsuarioController = require('./controllers/UsuarioController');

routes.get('/pokes', UsuarioController.authenticateJWT, PokeController.index);
routes.get('/pokes/:id',UsuarioController.authenticateJWT, PokeController.show);
routes.post('/pokes', UsuarioController.authenticateJWT, PokeController.store);
routes.put('/pokes/:id', UsuarioController.authenticateJWT, PokeController.update);
routes.delete('/pokes/:id', UsuarioController.authenticateJWT, PokeController.delete);

routes.post('/login', UsuarioController.login); 

module.exports = routes;