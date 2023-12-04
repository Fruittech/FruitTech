var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar/:idTransportadora", function (req, res) {
    funcionarioController.cadastrarFuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.autenticar(req, res);
});

router.get("/selecionarFuncionarios/:idTransp", function (req, res) {
    funcionarioController.selecionarFuncionarios(req, res);
});

router.post("/selecionarCaminhoes", function (req, res) {
    funcionarioController.selecionarCaminhoes(req, res);
});

module.exports = router;