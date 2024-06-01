var quizModel = require("../models/quizModel");


function buscarUsuario(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Buscando o usuário pelo id`);

    quizModel.buscarUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); /*resposta que o bd traz*/
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
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
    var idUsuario = req.body.usuarioServer;

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
    buscarUsuario,
    verResultado,
    enviarResultado
}