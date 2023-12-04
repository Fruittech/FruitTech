var database = require("../database/config")

function buscarUltimasMedidas(idCaminhao, limit) {
    console.log("ACESSEI O SENSORDADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDadosGrafico(): ")
    var instrucao = `
    SELECT idCaminhao , marcaCaminhao, temperatura_LM35, umidade_DHT11, CONCAT(LPAD(HOUR(data_hora), 2, '0'), ':', LPAD(MINUTE(data_hora), 2, '0'), ':', LPAD(SECOND(data_hora), 2, '0')) AS data_hora
    FROM SensoresDados
    JOIN Caminhao
    ON caminhao_fkSensores = sensoresdados_fkSensores
	WHERE idCaminhao = ${idCaminhao}
    LIMIT ${limit};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedidasTempoReal(idCaminhao) {

    var instrucaoSql = `
	SELECT idCaminhao, idSensoresDados, temperatura_LM35,
    umidade_DHT11,
    CONCAT(LPAD(HOUR(data_hora), 2, '0'),
    ':', LPAD(MINUTE(data_hora), 2, '0'),
    ':', LPAD(SECOND(data_hora), 2, '0')) AS data_hora
    FROM SensoresDados
    JOIN Caminhao
    ON caminhao_fkSensores = sensoresdados_fkSensores
	WHERE idCaminhao = ${idCaminhao}
    ORDER BY idSensoresDados DESC LIMIT 1;
    `;
    

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasTempoReal
};