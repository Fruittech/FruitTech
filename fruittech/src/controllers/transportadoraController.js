var transportadoraModel = require("../models/transportadoraModel");
var CaminhaoModel = require("../models/caminhaoModel")

function autenticar(req, res) {
  var CNPJ = req.body.CNPJServer;
  var senha = req.body.senhaServer;

  if (CNPJ == undefined) {
    res.status(400).send("Seu CNPJ está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {

    transportadoraModel.autenticar(CNPJ, senha)
    .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);

          CaminhaoModel.buscarCaminhoesPorTransportadora(resultadoAutenticar[0].idTransportadora)
                             .then((resultadoCaminhoes) => {
                               
                                if (resultadoCaminhoes.length > 0) {
                                    res.json({
                                      id: resultadoAutenticar[0].idTransportadora,
                                      email: resultadoAutenticar[0].emailTransportadora,
                                      nome: resultadoAutenticar[0].nomeTransportadora,
                                      caminhoes: resultadoCaminhoes
                                    });
                                } else {
                                    res.status(204).json({ caminhoes: [] });
                                }
                            }) 
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de uma transportadora com o mesmo login e senha!");
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

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

// function cadastrar(req, res) {
//   var cnpj = req.body.cnpj;
//   var razaoSocial = req.body.razaoSocial;

//   empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
//     } else {
//       empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  // cadastrar,
  listar,
  autenticar
};
