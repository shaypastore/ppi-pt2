const express = require('express');
const routes = express.Router();
const PokeController = require('./controllers/PokeController');

routes.get('/pokes',PokeController.index);
routes.get('/pokes/:id',PokeController.show);
routes.post('/pokes',PokeController.store);
routes.put('/pokes/:id',PokeController.update);
routes.delete('/pokes/:id',PokeController.delete);
module.exports = routes;