var database = require("../database/config")

function autenticarSensor(CodigoSensor) {
    console.log("ACESSEI O SENSOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", CodigoSensor)
    var instrucao = `
        SELECT idSensores FROM Sensores WHERE codigoSensores = '${CodigoSensor}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticarSensor
};