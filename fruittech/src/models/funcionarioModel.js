var database = require("../database/config")

function autenticar(CPF, senha) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", CPF, senha)
    var instrucao = `
        SELECT idFuncionario, nomeFuncionario, funcionario_fkTransportadora as fk_t FROM Funcionario WHERE cpf = '${CPF}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarFuncionario(nome, sobrenome, cpf, senha, id) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, cpf, senha, id);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
            INSERT INTO Funcionario (nomeFuncionario, sobrenomeFuncionario, cpf, senhaUsuario, funcionario_fkTransportadora) VALUES ('${nome}', '${sobrenome}', '${cpf}', '${senha}', ${id});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selecionarFuncionarios(id) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id)
    var instrucao = `SELECT nomeFuncionario, sobrenomeFuncionario, cpf , senhaUsuario FROM Funcionario WHERE funcionario_fkTransportadora = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selecionarCaminhoes(id) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id)
    var instrucao = `SELECT marcaCaminhao, modeloCaminhao, placaCaminhao , comprimentoCaminhao, alturaCaminhao, codigoSensores FROM Caminhao JOIN Sensores ON caminhao_fkSensores = idSensores WHERE Caminhao_fkTransportadora = ${id};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// // Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// function cadastrar(nome, email, senha, empresaId) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO usuario (nome, email, senha, fk_empresa) VALUES ('${nome}', '${email}', '${senha}', '${empresaId}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    autenticar,
    cadastrarFuncionario,
    selecionarFuncionarios,
    selecionarCaminhoes
};