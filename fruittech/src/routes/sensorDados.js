var express = require("express");
var router = express.Router();

var sensorDadosController = require("../controllers/sensorDadosController");

router.get("/ultimas/:idCaminhao", function (req, res) {
    sensorDadosController.buscarUltimasMedidas(req, res);
})

router.get("/tempo-real/:idCaminhao", function (req, res) {
    sensorDadosController.buscarMedidasTempoReal(req, res);
})

module.exports = router;