var SensorModel = require("../models/sensorModel");
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