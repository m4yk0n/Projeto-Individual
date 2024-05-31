var quizModel = require("../models/quizModel");

function buscarUsuarioPorId(req, res) {
    var idUsuario = req.body.usuarioServer;

    quizModel.buscarUsuarioPorId(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function verResultado(req, res) {
    quizModel.verResultado().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
};

function enviarResultado(req, res) {
    var resultadoQuiz = req.body.scoreServer;
    var idUsuario = req.body.usuarioServer

    if (resultadoQuiz == undefined || idUsuario == undefined) {
        res.status(400).send("O resultado está undefined!");
    }
    quizModel.enviarResultado(idUsuario, resultadoQuiz).then(
        function (resultado) {
            res.json(resultado)
            res.status(200).send("Resultado registrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarUsuarioPorId,
    verResultado,
    enviarResultado
}