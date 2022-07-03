const mongoose = require('mongoose');
const Pokemon = mongoose.model('Pokemon');

module.exports = {

  //LISTA todos os pokemons
  async index(req, res) {
        const pokes = await Pokemon.find();
    return res.json(pokes);
  },

  // CRIA um novo pokemon
  async store(req, res) {
    const Poke = await Pokemon.create(req.body);
    return res.json(Poke);
  },

  // MOSTRA o detalhe de um pokemon
  async show(req, res) {
    const Poke = await Pokemon.findById(req.params.id);
    return res.json(Poke);
  },

  // ATUALIZA um pokemon
  async update(req, res) {
    const Poke = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(Poke);
  },

  //EXCLUI um pokemon
  async delete(req, res) {
    await Pokemon.findByIdAndDelete(req.params.id);
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
