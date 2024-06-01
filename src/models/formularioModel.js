var database = require("../database/config")

function buscarFavorito(usuarioId) {
    var buscaFavoritoId = `SELECT faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, faixa7, faixa8, faixa9, faixa10, faixa11, faixa12, faixa13, faixa14
    FROM formulario WHERE  fkUsuario = ${usuarioId}`;

    console.log("Executando a instrução SQL: \n" + buscaFavoritoId);
    return database.executar(buscaFavoritoId);
}

function enviarFavorito(idUsuario, faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, faixa7, faixa8, faixa9, faixa10, faixa11, faixa12, faixa13, faixa14) {
    var enviarFavoritos = ` 
        INSERT INTO formulario (fkUsuario, faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, faixa7, faixa8, faixa9, faixa10, faixa11, faixa12, faixa13, faixa14) VALUES ('${idUsuario}', '${faixa1}', '${faixa2}', '${faixa3}', '${faixa4}', '${faixa5}', '${faixa6}', '${faixa7}', '${faixa8}', '${faixa9}', '${faixa10}', '${faixa11}', '${faixa12}', '${faixa13}', '${faixa14}'); 
    `;
    console.log("Executando a instrução SQL: \n" + enviarFavoritos);
    return database.executar(enviarFavoritos);
}

function verFavorito() {
    var buscaFavoritoGeral = `SELECT 
            SUM(faixa1) as faixa1_votes, 
            SUM(faixa2) as faixa2_votes, 
            SUM(faixa3) as faixa3_votes, 
            SUM(faixa4) as faixa4_votes, 
            SUM(faixa5) as faixa5_votes, 
            SUM(faixa6) as faixa6_votes, 
            SUM(faixa7) as faixa7_votes, 
            SUM(faixa8) as faixa8_votes, 
            SUM(faixa9) as faixa9_votes, 
            SUM(faixa10) as faixa10_votes, 
            SUM(faixa11) as faixa11_votes, 
            SUM(faixa12) as faixa12_votes, 
            SUM(faixa13) as faixa13_votes, 
            SUM(faixa14) as faixa14_votes 
            FROM formulario;
    `
    console.log("Executando a instrução SQL: \n" + buscaFavoritoGeral);
    return database.executar(buscaFavoritoGeral);
}


module.exports = {
    buscarFavorito,
    enviarFavorito,
    verFavorito
}