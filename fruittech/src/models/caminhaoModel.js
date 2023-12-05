var database = require("../database/config");

function buscarCaminhoesPorTransportadora(idTransportadora) {
  var query = `SELECT * FROM Caminhao WHERE caminhao_fkTransportadora = '${idTransportadora}'`;

  return database.executar(query);
}

function cadastrar(marca, modelo, placa, comprimento, altura, fkTransp, fkSensor) {
  var query = `INSERT INTO Caminhao VALUES
  (null ,'${marca}', '${modelo}', '${placa}', ${comprimento}, ${altura}, ${fkTransp}, ${fkSensor});`;

  return database.executar(query);
}

function listarUltimoCadastro(idTransportadora) {
  var query = `    
  SELECT * FROM Caminhao 
  WHERE caminhao_fkTransportadora = ${idTransportadora} 
  ORDER BY idCaminhao DESC LIMIT 1;`;

  return database.executar(query);
}


function verificacaoSensorCaminhoes(codigoSensor) {
  var query = `SELECT idCaminhao, codigoSensores FROM Caminhao JOIN Sensores ON caminhao_fkSensores = idSensores
	WHERE codigoSensores = '${codigoSensor}';`;

  return database.executar(query);
}


module.exports = { buscarCaminhoesPorTransportadora, listarUltimoCadastro, cadastrar, verificacaoSensorCaminhoes };
