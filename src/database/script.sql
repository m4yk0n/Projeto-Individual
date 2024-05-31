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
    qtdPerguntas INT DEFAULT 10,
    qtdAcertos INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from usuario;

select * from quiz;











