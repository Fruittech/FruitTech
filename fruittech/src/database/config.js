var mysql = require("mysql2");
var sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
// var sqlServerConfig = {
//     server: "SEU_SERVIDOR",
//     database: "SEU_BANCO_DE_DADOS",
//     user: "SEU_USUARIO",
//     password: "SUA_SENHA",
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     options: {
//         encrypt: true, // for azure
//     }
// }

// CONEXÃO DO MYSQL WORKBENCH - FACULDADE
// var mySqlConfig = {
//     host: "localhost",
//     database: "FruitTech",
//     user: "aluno",
//     password: "sptech",
// };

// CONEXÃO DO MYSQL WORKBENCH - DIEGO
// var mySqlConfig = {
//     host: "localhost",
//     database: "FruitTech",
//     user: "root",
//     password: "diego7173",
// };

// CONEXÃO DO MYSQL WORKBENCH - ISAAC
var mySqlConfig = {
   host: "localhost",
   database: "FruitTech",
   user: "root",
   password: "159357",
};

// CONEXÃO DO MYSQL WORKBENCH - VOLPE
// var mySqlConfig = {
//     host: "localhost",
//     database: "FruitTech",
//     user: "root",
//     password: "#Gf52273189800",
// };

// CONEXÃO DO MYSQL WORKBENCH - LEONARDO
// var mySqlConfig = {
//     host: "localhost",
//     database: "fruittech",
//     user: "root",
//     password: "leo17130202",
// };

// CONEXÃO DO MYSQL WORKBENCH - Guilherme
//  var mySqlConfig = {
//      host: "localhost",
//      database: "fruittech",
//      user: "aluno",
//      password: "sptech",
//  };


function executar(instrucao) {
    // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instrucao);
            }).then(function (resultados) {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', function (erro) {
                return ("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

module.exports = {
    executar
}
