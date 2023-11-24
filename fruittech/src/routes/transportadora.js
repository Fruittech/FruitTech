var express = require("express");
var router = express.Router();

var transportadoraController = require("../controllers/transportadoraController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrar", function (req, res) {
//     empresaController.cadastrar(req, res);
// })

// router.get("/buscar", function (req, res) {
//     empresaController.buscarPorCnpj(req, res);
// });

// router.get("/buscar/:id", function (req, res) {
//   empresaController.buscarPorId(req, res);
// });

// router.get("/listar", function (req, res) {
//   empresaController.listar(req, res);
// });

router.post("/autenticar", function (req, res) {
  transportadoraController.autenticar(req, res);
});


module.exports = router;