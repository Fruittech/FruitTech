var database = require("../database/config");

function buscarCaminhoesPorTransportadora(idTransportadora) {
  var query = `SELECT * FROM Caminhao WHERE caminhao_fkTransportadora = '${idTransportadora}'`;

  return database.executar(query);
}

function cadastrar(marca, modelo, chassi, comprimento, altura, fkTransp, fkSensor) {
  var query = `INSERT INTO Caminhao VALUES
  (null ,'${marca}', '${modelo}', '${chassi}', ${comprimento}, ${altura}, ${fkTransp}, ${fkSensor});`;

  return database.executar(query);
}

module.exports = { buscarCaminhoesPorTransportadora, cadastrar };
