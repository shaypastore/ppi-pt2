const mongoose = require('mongoose');
const Poke = mongoose.model('Pokemon');


//objeto as funções
module.exports = {

  // Vai retornar todos os pokemons de nosso banco de dados
  async index(req, res) {
    //pega os parâmetros get da requisição
    const { page = 1 } = req.query;
    // retorna os pokemons de nosso banco de dados
    const pokes = await Poke.paginate({}, { page, limit: 10 });
    return res.json(pokes);
  },


  // Criar um novo pokemon
  async store(req, res) {
    const Poke = await Poke.create(req.body);
    return res.json(poke);
  },


  // Mostrar o detalhe de um pokemon
  async show(req, res) {
    const poke = await Poke.findById(req.params.id);
    return res.json(poke);
  },

  // Atualizar um pokemon
  async update(req, res) {
    // procura um pokemon pelo ID e atualiza ele
    const poke = await Poke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(poke);
  },

  async delete(req, res) {
    await Poke.findByIdAndDelete(req.params.id);
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
