const express = require("express");
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const app = express();
app.use(express.json());

const uri = "mongodb+srv://shaypastore:shay7612P@cluster0.tjtdi.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,
{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', function() {
console.log('Estamos conectados no banco de dados!')
});

requireDir("./src/models");
app.use('/api', require('./src/routes'));

app.listen(5600, () => {
  console.log("Exemplo de aplicativo ouvindo a porta 5600");
});
