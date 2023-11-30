var express = require("express");
var router = express.Router();

var caminhaoController = require("../controllers/sensorController");

router.post("/cadastrar/:idTransp/:idSensor", function (req, res) {
    caminhaoController.cadastrar(req, res);
})

module.exports = router;