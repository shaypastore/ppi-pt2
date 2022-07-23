const express = require('express');
const routes = express.Router();
const PokeController = require('./controllers/PokeController');
const UsuarioController = require('./controllers/UsuarioController');
const db = require("./db");

routes.get('/pokes', UsuarioController.authenticateJWT, PokeController.index);
routes.get('/pokes/:id',UsuarioController.authenticateJWT, PokeController.show);
routes.post('/pokes', UsuarioController.authenticateJWT, PokeController.store);
routes.put('/pokes/:id', UsuarioController.authenticateJWT, PokeController.update);
routes.delete('/pokes/:id', UsuarioController.authenticateJWT, PokeController.delete);

routes.post('/login', UsuarioController.login);

// //Define uma rota - Prova P4
// routes.get("/", (req, res) => {
//     return res.send("Rota para retornar os autores");
//     });

// associa as rotas ao seu método do db.js
routes.get('/authors',db.selectAuthors);
routes.post('/authors',db.insertAuthor); 
routes.put('/authors/:id',db.updateAuthor);
routes.delete('/authors/:id',db.deleteAuthor);   

module.exports = routes;