var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController")

router.get("/buscarFavorito/:idUsuario", function (req, res) {
    formularioController.buscarFavorito(req, res);
});

router.post("/enviarFavorito", function(req, res){
    formularioController.enviarFavorito(req, res);
});

router.get("/verFavorito", function(req, res){
    formularioController.verFavorito(req, res);
});



module.exports = router;