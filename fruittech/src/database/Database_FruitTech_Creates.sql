-- drop database FruitTechV1;

create database FruitTech;

use FruitTech;

-- TABELAS
create table Transportadora (
idTransportadora int primary key auto_increment,
nomeTransportadora varchar(45),
cnpj char(18),
emailTransportadora varchar(90),
senhaTransportadora varchar(45)
);

create table Telefone (
idTelefone int primary key auto_increment,
telefoneFixo varchar(30),
telefoneCelular varchar(30),
telefone_fkTransportadora int, 
constraint foreign key (telefone_fkTransportadora) references Transportadora(idTransportadora)
);

create table Endereco (
idEndereco int primary key auto_increment,
estado varchar(30),
cep char(9),
cidade varchar(45),
rua varchar(90),
bairro varchar(90),
numero int,
complemento varchar(90),
Endereco_fkTransportadora int, 
constraint foreign key (Endereco_fkTransportadora) references Transportadora(idTransportadora)
);

create table Funcionario (
idFuncionario int primary key auto_increment,
nomeFuncionario varchar(40),
sobrenomeFuncionario varchar(40),
cpf char(14),
senhaUsuario varchar(30),
funcionario_fkTransportadora int,
constraint foreign key (funcionario_fkTransportadora) references Transportadora(idTransportadora)
);

create table Sensores (
idSensores int primary key auto_increment,
codigoSensores CHAR (36)
);

create table SensoresDados (
idSensoresDados int primary key auto_increment,
temperatura_LM35 double,
umidade_DHT11 double,
temperatura_DHT11 double,
data_hora timestamp default current_timestamp,
sensoresDados_fkSensores int,
constraint foreign key (sensoresDados_fkSensores) references Sensores(idSensores)
);

create table Caminhao (
idCaminhao int primary key auto_increment,
marcaCaminhao varchar(40),
modeloCaminhao varchar(40),
chassiCaminhao char(17),
comprimentoCaminhao double,
alturaCaminhao double,
Caminhao_fkTransportadora int,
Caminhao_fkSensores int,
constraint foreign key (Caminhao_fkTransportadora) references Transportadora(idTransportadora),
constraint foreign key (Caminhao_fkSensores) references Sensores(idSensores)
);


-- DESCRIÇÃO
describe Transportadora;
describe Funcionario;
describe Endereco;
describe Caminhao;
describe Telefone;
describe Produto;
describe Sensores;
describe SensoresDados;
