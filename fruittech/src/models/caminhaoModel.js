var database = require("../database/config");

function buscarCaminhoesPorTransportadora(idTransportadora) {
  var query = `SELECT * FROM Caminhao WHERE caminhao_fkTransportadora = '${idTransportadora}'`;

  return database.executar(query);
}

module.exports = { buscarCaminhoesPorTransportadora };
