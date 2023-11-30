process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var transportadoraRouter = require("./src/routes/transportadora");
var funcionarioRouter = require("./src/routes/funcionario");
var caminhaoRouter = require("./src/routes/caminhao");
var sensorRouter = require("./src/routes/sensor");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public", "views")));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.use(cors());

app.use("/", indexRouter);
app.use("/transportadora", transportadoraRouter);
app.use("/funcionario", funcionarioRouter);
app.use("/caminhao", caminhaoRouter);
app.use("/sensor", sensorRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
