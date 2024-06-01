create database WWAFA;

use WWAFA;

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE quiz (
    idTentativa INT AUTO_INCREMENT PRIMARY KEY,
    fkUsuario INT,
    qtdAcertos INT,
    dtTentativa DATETIME DEFAULT NOW(),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from usuario;

select * from quiz;

select q.dtTentativa, q.qtdAcertos, u.nome from usuario as u
inner join quiz as q where u.idUsuario = q.fkUsuario;



