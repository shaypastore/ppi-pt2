const mysql = require("mysql");

// Certifique-se de substituir 'user' e 'password' pelos valores corretos
const con = mysql.createConnection({
  host: "localhost",
  database: "sitepoint",
  user: "user",
  password: "password",
});

con.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao banco de dados");
    return;
  }
  console.log("Conexão estabelecida");
});

/// Vamos exportar um objeto com algumas funções
module.exports = {
  // Vai retornar todos os authors de nosso banco de dados
  async selectAuthors(req, res) {
    con.query("SELECT * FROM authors", (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json(results);
    });
  },

  // Vai inserir um author
  async insertAuthor(req, res) {
    const author = req.body;
    con.query("INSERT INTO authors SET ?", author, (err, results) => {
      if (err) throw err;
      console.log("Last insert ID:", results.insertId);
      res.json(results);
    });
  },

  // Vai atualizar um author
  async updateAuthor(req, res) {
    const id = req.params.id;
    const { city } = req.body;
    con.query(
      "UPDATE authors SET city = ? Where ID = ?",
      [city, id],
      (err, results) => {
        if (err) throw err;
        console.log(`Changed ${results.changedRows} row(s)`);
        res.json(results);
      }
    );
  },

  // Vai excluir um author
  async deleteAuthor(req, res) {
    const id = req.params.id;
    con.query("DELETE FROM authors WHERE id = ?", id, (err, results) => {
      if (err) throw err;
      console.log(`Deleted ${results.affectedRows} row(s)`);
      res.json(results);
    });
  },
};
