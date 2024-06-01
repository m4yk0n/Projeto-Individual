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

CREATE TABLE formulario (
	idEnvio INT AUTO_INCREMENT PRIMARY KEY,
    fkUsuario INT,
    faixa1 INT,
    faixa2 INT,
    faixa3 INT,
    faixa4 INT,
    faixa5 INT,
    faixa6 INT,
    faixa7 INT,
    faixa8 INT,
    faixa9 INT,
    faixa10 INT,
    faixa11 INT,
    faixa12 INT,
    faixa13 INT,
    faixa14 INT,
    dtEnvio DATETIME DEFAULT NOW(),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from usuario;

select * from quiz;

select * from formulario;

SELECT SUM(faixa1), SUM(faixa2), SUM(faixa3), SUM(faixa4), SUM(faixa5), SUM(faixa6), SUM(faixa7), SUM(faixa8), SUM(faixa9), SUM(faixa10), SUM(faixa11), SUM(faixa12), SUM(faixa13), SUM(faixa14) FROM formulario;

select q.dtTentativa, q.qtdAcertos, u.nome from usuario as u
inner join quiz as q where u.idUsuario = q.fkUsuario;



