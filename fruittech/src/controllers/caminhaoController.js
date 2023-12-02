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
    } else if (altura == undefined){
      res.status(400).send("A altura do caminhão está 'undefined'!");
    } else if (codigoSensor == undefined) {
      res.status(400).send("O código do sensor está 'undefined'!");
    } else if (idTransp == undefined){
      res.status(400).send("O id da transportadora está 'undefined'!");
    } else{

      SensorModel.autenticarSensor(codigoSensor)
      
      .then(function (resultadoAutenticarSensor) {
          console.log(`\nSensor - Resultados encontrados: ${resultadoAutenticarSensor.length}`);
          console.log(`Sensor - Dados Resultados: ${JSON.stringify(resultadoAutenticarSensor)}`); // transforma JSON em String
  
          if (resultadoAutenticarSensor.length == 1) {


            CaminhaoModel.cadastrar(marca, modelo, placa, comprimento, altura, idTransp, resultadoAutenticarSensor[0].idSensores)
            .then(function (resultado) {
              res.json(resultado);
            })

            .catch(function (erro) {
              console.log(erro);
              console.log(
                "\nHouve um erro ao realizar o cadastro do caminhão ! Erro: ",
                erro.sqlMessage
              );
              res.status(500).json(erro.sqlMessage);
            });


          } else if (resultadoAutenticar.length == 0) {
            res.status(404).send("Código do sensor inválido!");
          } else {
            res.status(403).send("Mais de um sensor com o mesmo código!");
          }
        })


        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar a autenticação do sensor! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });


    }

    }
      


  module.exports = {
    cadastrar,
  };
  