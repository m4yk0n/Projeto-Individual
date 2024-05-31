var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.get("/:usuarioId", function (req, res) {
    quizController.buscarUsuarioPorId(req, res);
});

router.post("/enviarResultado", function(req, res){
    quizController.enviarResultado(req, res);
});

router.get("/verResultado", function(req, res){
    quizController.verResultado(req, res);
});


module.exports = router;