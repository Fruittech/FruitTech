var express = require("express");
var router = express.Router();

var sensorDadosController = require("../controllers/sensorDadosController");

router.get("/ultimas/:idCaminhao", function (req, res) {
    sensorDadosController.buscarUltimasMedidas(req, res);
})

module.exports = router;