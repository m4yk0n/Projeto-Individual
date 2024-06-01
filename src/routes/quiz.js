var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.get("/buscarUsuario/:idUsuario", function (req, res) {
    quizController.buscarUsuario(req, res);
});

router.post("/enviarResultado", function(req, res){
    quizController.enviarResultado(req, res);
});

router.get("/verResultado", function(req, res){
    quizController.verResultado(req, res);
});



module.exports = router;