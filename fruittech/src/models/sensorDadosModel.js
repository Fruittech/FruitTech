var database = require("../database/config")

function buscarUltimasMedidas(idCaminhao, limit) {
    console.log("ACESSEI O SENSORDADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosGrafico(): ")
    var instrucao = `
    SELECT idCaminhao, temperatura_LM35, umidade_DHT11, data_hora
    FROM SensoresDados
    JOIN Caminhao
    ON caminhao_fkSensores = sensoresdados_fkSensores
	WHERE idCaminhao = ${idCaminhao}
    LIMIT ${limit};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas
};