var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from empresa where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from empresa`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(razaoSocial, cnpj) {
  var query = `insert into empresa (razao_social, cnpj) values ('${razaoSocial}', '${cnpj}')`;

  return database.executar(query);
}

function autenticar(CNPJ, senha) {
  console.log("ACESSEI A TRASPORTADORA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", CNPJ, senha)
  var instrucao = `
      SELECT idTransportadora, nomeTransportadora, emailTransportadora FROM Transportadora WHERE cnpj = '${CNPJ}' AND senhaTransportadora = '${senha}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar, autenticar };
