var SensorModel = require("../models/sensorModel");
var CaminhaoModel = require("../models/caminhaoModel")

function cadastrar(req, res) {
  var idTransp = req.params.idTransp
  var marca = req.body.marcaServer
  var modelo = req.body.modeloServer
  var placa = req.body.placaServer
  var comprimento = req.body.comprimentoServer
  var altura = req.body.alturaServer
  var codigoSensor = req.body.codigoSensorServer

  if (marca == undefined) {
    res.status(400).sendd("A marca do caminhão está 'undefined'!");
  } else if (modelo == undefined) {
    res.status(400).send("O modelo do caminhão está 'undefined'!");
  } else if (placa == undefined) {
    res.status(400).send("A placa do caminhão está 'undefined'!");
  } else if (comprimento == undefined) {
    res.status(400).send("O modelo do caminhão está 'undefined'!");
  } else if (altura == undefined) {
    res.status(400).send("A altura do caminhão está 'undefined'!");
  } else if (codigoSensor == undefined) {
    res.status(400).send("O código do sensor está 'undefined'!");
  } else if (idTransp == undefined) {
    res.status(400).send("O id da transportadora está 'undefined'!");
  } else {

    SensorModel.autenticarSensor(codigoSensor)
    .then(function (resultadoAutenticarSensor) {
      if (resultadoAutenticarSensor.length === 1) {
        return CaminhaoModel.verificacaoSensorCaminhoes(codigoSensor)
          .then(function (resultadoVerificacaoSensorCaminhoes) {
            if (resultadoVerificacaoSensorCaminhoes.length === 0) {
              return CaminhaoModel.cadastrar(
                marca,
                modelo,
                placa,
                comprimento,
                altura,
                idTransp,
                resultadoAutenticarSensor[0].idSensores
              );
            } else {
              res.status(409).send("O Código do sensor já está cadastrado em um caminhão!");
              return Promise.reject("Código do sensor já cadastrado em um caminhão");
            }
          });
      } else if (resultadoAutenticarSensor.length === 0) {
        res.status(404).send("Código do sensor inválido!");
        return Promise.reject("Código do sensor inválido");
      } else {
        res.status(403).send("Mais de um sensor com o mesmo código!");
        return Promise.reject("Mais de um sensor com o mesmo código");
      }
    })
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error("Erro:", erro);
      if (!res.headersSent) {
        res.status(500).send("Erro ao processar a solicitação.");
      }
    });

}
}

function listarUltimoCadastro(req, res) {
  idT = req.params.idTransportadora

  CaminhaoModel.listarUltimoCadastro(idT).then((resultadoBuscaCaminhao) => {
    res.status(200).json({
      idCaminhao: resultadoBuscaCaminhao[0].idCaminhao,
      marcaCaminhao: resultadoBuscaCaminhao[0].marcaCaminhao,
      modeloCaminhao: resultadoBuscaCaminhao[0].modeloCaminhao,
      comprimentoCaminhao: resultadoBuscaCaminhao[0].comprimentoCaminhao,
      alturaCaminhao: resultadoBuscaCaminhao[0].alturaCaminhao,
      caminhao_fkTransportadora: resultadoBuscaCaminhao[0].Caminhao_fkTransportadora,
      caminhao_fkSensores: resultadoBuscaCaminhao[0].Caminhao_fkSensores
    });
  });
}



module.exports = {
  cadastrar,
  listarUltimoCadastro
}
