const express = require("express");
const mongoose = require('mongoose');
const requireDir = require("require-dir");
//const mongoosePaginate = require("mongoose-paginate");
const app = express();


//Cria a conexão com o banco de dados
const uri = "mongodb+srv://shaypastore:shay7612P@cluster0.cifcl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,
{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//trata os erros da conexão
mongoose.connection.on('error',function (err) {
console.log('Erro na conexão Mongoose padrão: ' + err);
});
//A conexão foi feita com sucesso
db.once('open', function() {
console.log('Estamos conectados no banco de dados!')
});

//Registra o Model em index.js
//require('./src/models/Poke');
//Referencia o model Poke
//const Poke = mongoose.model('Pokemon');

//Define uma rota
// app.get("/pokes", (req, res) => {
//   Poke.create({
//     name: 'Pikachu',
//     type: 'Lightning',
//     altura: '30.0',
//     peso: '12.3'
//     });
// return res.send("Lista Pokemons");
// });

//Registra o Model em index.js
requireDir("./src/models");
// Redireciona o caminho http://localhost:3000/api para o routes
app.use('/api', require('./src/routes'));

// Inicia o servidor na porta '5600'
app.listen(5600, () => {
  console.log("Exemplo de aplicativo ouvindo a porta 5600");
});


// const cors = require("cors");
// //Permitir enviar dados para a App no formato JSON
// app.use(express.json());
// //Permite o uso do CORS (acesso a domínios externos da nossa API)
// app.use(cors());

