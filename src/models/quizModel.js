var database = require("../database/config")

function buscarUsuario(usuarioId) {
    var buscaUsuarioId = `select qtdAcertos
    from quiz WHERE  fkUsuario = ${usuarioId}`;

    console.log("Executando a instrução SQL: \n" + buscaUsuarioId);
    return database.executar(buscaUsuarioId);
}

function verResultado(usuarioId) {
    var verResultado = ` 
         SELECT idTentativa, qtdAcertos FROM quiz WHERE fkUsuario = ${usuarioId}; 
     `;
    console.log("Executando a instrução SQL: \n" + verResultado);
    return database.executar(verResultado);
}

function enviarResultado(usuarioId, scoreVar) {
    var enviarAcertos = ` 
        INSERT INTO quiz (fkUsuario, qtdAcertos) VALUES ('${usuarioId}', '${scoreVar}'); 
    `;
    console.log("Executando a instrução SQL: \n" + enviarAcertos);
    return database.executar(enviarAcertos);
}

module.exports = {
    buscarUsuario,
    enviarResultado,
    verResultado
}