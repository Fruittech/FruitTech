var express = require("express");
var router = express.Router();

var caminhaoController = require("../controllers/caminhaoController");

router.post("/cadastrar/:idTransp", function (req, res) {
    caminhaoController.cadastrar(req, res);
})

router.get("/listarUltimoCadastro/:idTransportadora"), function (req, res){
    caminhaoController.listarUltimoCadastro(req, res)
}

module.exports = router;