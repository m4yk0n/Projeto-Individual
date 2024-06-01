var formularioModel = require("../models/formularioModel");

function buscarFavorito(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Buscando favoritos do usuário pelo id`);

    formularioModel.buscarFavorito(idUsuario).then(function (resultado) {
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

function enviarFavorito(req, res) {
    var idUsuario = req.body.usuarioServer;
    var faixa1 = req.body.faixa1Server;
    var faixa2 = req.body.faixa2Server;
    var faixa3 = req.body.faixa3Server;
    var faixa4 = req.body.faixa4Server;
    var faixa5 = req.body.faixa5Server;
    var faixa6 = req.body.faixa6Server;
    var faixa7 = req.body.faixa7Server;
    var faixa8 = req.body.faixa8Server;
    var faixa9 = req.body.faixa9Server;
    var faixa10 = req.body.faixa10Server;
    var faixa11 = req.body.faixa11Server;
    var faixa12 = req.body.faixa12Server;
    var faixa13 = req.body.faixa13Server;
    var faixa14 = req.body.faixa14Server;


    if (idUsuario == undefined || faixa1 == undefined || faixa2 == undefined || faixa3 == undefined || faixa4 == undefined || faixa5 == undefined || faixa6 == undefined || faixa7 == undefined || faixa8 == undefined || faixa9 == undefined || faixa10 == undefined || faixa11 == undefined || faixa12 == undefined || faixa13 == undefined || faixa14 == undefined) {
        res.status(400).send("A faixa está undefined!");
    }
    formularioModel.enviarFavorito(idUsuario, faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, faixa7, faixa8, faixa9, faixa10, faixa11, faixa12, faixa13, faixa14).then(
        function (resultado) {
            res.json(resultado)
            res.status(200).send("Faixas registradas com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
}

function verFavorito(req, res) {
    formularioModel.verFavorito().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    buscarFavorito,
    enviarFavorito,
    verFavorito
}