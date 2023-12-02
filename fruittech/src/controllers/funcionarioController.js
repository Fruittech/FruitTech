var funcionarioModel = require("../models/funcionarioModel");
var CaminhaoModel = require("../models/caminhaoModel")

function autenticar(req, res) {
  var CPF = req.body.CPFServer;
  var senha = req.body.senhaServer;

  if (CPF == undefined) {
    res.status(400).send("Seu CPF está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {

    funcionarioModel.autenticar(CPF, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);

          CaminhaoModel.buscarCaminhoesPorTransportadora(resultadoAutenticar[0].fk_t)
            .then((resultadoCaminhoes) => {

              if (resultadoCaminhoes.length > 0) {
                res.json({
                  id: resultadoAutenticar[0].idFuncionario,
                  nome: resultadoAutenticar[0].nomeFuncionario,
                  senha: resultadoAutenticar[0].senhaUsuario,
                  caminhoes: resultadoCaminhoes
                });
              } else {
                res.status(204).json({ caminhoes: [] });
              }
            })
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var empresaId = req.body.empresaServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (empresaId == undefined) {
    res.status(400).send("Sua empresa está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, senha, empresaId)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarFuncionario(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var sobrenome = req.body.sobrenomeServer;
  var cpf = req.body.cpfServer;
  var senha = req.body.senhaServer;
  var id = req.body.idServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (sobrenome == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (cpf == undefined) {
    res.status(400).send("Sua empresa está undefined!");
  } else if (id == undefined) {
    res.status(400).send("Sua empresa está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    funcionarioModel
      .cadastrarFuncionario(nome, sobrenome, cpf, senha, id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  autenticar,
  cadastrar,
  cadastrarFuncionario,
};
