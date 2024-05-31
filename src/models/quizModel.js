var database = require("../database/config")

function buscarUsuarioPorId(usuarioId) {
    var usuarioId = req.body.usuarioServer;
    var buscarUsuario = `SELECT * from quiz WHERE fkUsuario = ${usuarioId}`
    console.log("Executando a instrução SQL: \n" + buscarUsuario);
    return database.executar(buscarUsuario);
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
    buscarUsuarioPorId,
    enviarResultado,
    verResultado
}