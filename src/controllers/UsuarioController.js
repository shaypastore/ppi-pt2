const jwt = require("jsonwebtoken");
const mysql = require('mysql2');
const accessTokenSecret = "youraccesstokensecret";

const con = mysql.createConnection({
  host: "localhost",
  database: "sitepoint",
  user: "root",
  password: "asdf000",
});


module.exports = {
  // Vai retornar todos os usuarios de nosso banco de dados
  async selectUsuarios() {
    con.query("SELECT * FROM usuarios", (err, results) => {
      if (err) throw err;
      console.log(results);
      return results;
    });
  },

  async login(req, res) {
    // Lê o nome de usuário e a senha no corpo da requisição
    const { username, password } = req.body;

    const users = selectUsuarios();

    // Filtra o usuário(user) do array de usuários(users) por nome de usuário     e senha
    const user = users.find((u) => {
      return u.username === username && u.password === password;
    });

    if (user) {
      // Gera um token de acesso
      const accessToken = jwt.sign(
        { username: user.username, role: user.role },
        accessTokenSecret
      );
      res.json({
        accessToken,
      });
    } else {
      res.send("Nome de usuário ou senha incorretos");
    }
  },

authenticateJWT (req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  },
};

