var sensorDadosModel = require("../models/sensorDadosModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idCaminhao = req.params.idCaminhao;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    sensorDadosModel.buscarUltimasMedidas(idCaminhao, limite_linhas)
    
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasTempoReal(req, res) {

    var idCaminhao = req.params.idCaminhao;

    console.log(`Recuperando medidas em tempo real`);

    sensorDadosModel.buscarMedidasTempoReal(idCaminhao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasTempoReal,
    
}