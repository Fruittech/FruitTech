drop database FruitTechV1;

create database FruitTechV1;

use FruitTechV1;

-- DESCRIÇÃO
describe Transportadora;
describe Usuario;
describe Endereco;
describe Caminhao;
describe Telefone;
describe Produto;
describe Sensor;
describe SensorDados;

-- INSERÇÃO DE DADOS
insert into Transportadora values
(null, 'MamãoTransp', 78711574000165, 35622079, 'TAC', 'mamaotransp@gmail.com', 'formosapapaya'),
(null, 'FruitServices', 89653455528924, 95322475, 'ETC', 'fruitservices@gmail.com', 'frutasfrescas52'),
(null, 'TranspTrip', 65542376689045, 67789290, 'CTC', 'transptrip@gmail.com', 'tranptrippassword');

insert into Usuario values
(null, 1, 'Roberto', 'Manci', '78500623445', 'usuario573'),
(null, 1, 'Livia', 'Santana', '00991173040', 'usuario521'),
(null, 2, 'Felipe', 'Norberto', '50206345062', 'usuario592'),
(null, 2, 'Renato', 'Santoru', '67602959000', 'usuario548'),
(null, 3, 'Silvia', 'Viena', '48887684049', 'usuario567'),
(null, 3, 'Marcos', 'Pagliani', '14732116035', 'usuario540');

insert into Endereco values
(null, 'São Paulo', 08756180, 'Botucatu', 'Rua Genival Morato Prates', 'Parque dos Montes', 310, 'Academia Fisicult', 1),
(null, 'São Paulo', 06754323, 'Campos do Jordão', 'Rua José Vieira Machado', 'Vila Dirce', 215, 'Mercado Mothers', 2),
(null, 'São Paulo', 09154652, 'Itu', 'Rua Santa Intra', 'Rastro das Sereias', 40, 'Farmácia Drogasil', 3);

insert into Caminhao values
(null ,'Volkswagem', 'DELIVERY EXPRESS', '2TxbPH5KU69aB6313', '1.91', '2.53', 1),
(null, 'Mercedes-Benz', 'MB 2429', '5lrCYgpAAP6U89116', '2.30', '3.53', 1),
(null, 'Mercedes-Benz', 'MB 815', '7bjgA9fHbm84P2767', '3.00', '3.00', 2),
(null, 'Ford', 'CARGO 2429', '7H9A8GrNUj1AB0517', '4.00', '2.50', 2),
(null, 'Volkswagen', 'VW 10160', '2s50dLyRW5l4Y7979', '2.90', '3.50', 3),
(null, 'Iveco', 'DAILY 35-150', '4Ac8VT29K4T1K8565', '6.00', '3.00', 3);

insert into Telefone values
(null, '1124007755', '11926763364', 1),
(null, '1120730858', '11934536206', 2),
(null, '1136076763', '11933181022', 3);

insert into Produto values
(null, 'Mamão', 'Fruta', '11.50', '75.00', 1),
(null, 'Mamão', 'Fruta', '11.50', '75.00', 2),
(null, 'Mamão', 'Fruta', '11.50', '75.00', 3),
(null, 'Mamão', 'Fruta', '11.50', '75.00', 4),
(null, 'Mamão', 'Fruta', '11.50', '75.00', 5),
(null, 'Mamão', 'Fruta', '11.50', '75.00', 6);

insert into Sensor values 
(null, 'DHT11', 'Ativo', 1),
(null, 'LM35', 'Ativo', 1),
(null, 'DHT11', 'Inativo', 2),
(null, 'LM35', 'Ativo', 2),
(null, 'DHT11', 'Ativo', 3),
(null, 'LM35', 'Ativo', 3),
(null, 'DHT11', 'Ativo', 4),
(null, 'LM35', 'Ativo', 4),
(null, 'DHT11', 'Ativo', 5),
(null, 'LM35', 'Inativo', 5),
(null, 'DHT11', 'Ativo', 6),
(null, 'LM35', 'Ativo', 6);

insert into SensorDados values
(null, 1, '82.00', '11.00', current_timestamp),
(null, 2, null, '11.00', current_timestamp),
(null, 3, null, null, current_timestamp),
(null, 4, null, '12.00', current_timestamp),
(null, 5, '83.00', '11.50', current_timestamp),
(null, 6, null, '11.50', current_timestamp),
(null, 7, '75.00', '11.50', current_timestamp),
(null, 8, null, '11.50', current_timestamp),
(null, 9, '77.60', '11.00', current_timestamp),
(null, 10, null, null, current_timestamp),
(null, 11, '86.45', '10.00', current_timestamp),
(null, 12, null, '12.00', current_timestamp);

-- CONSULTAS
select * from Transportadora;
select * from Usuario;
select * from Endereco;
select * from Caminhao;
select * from Telefone;
select * from Produto;
select * from Sensor;
select * from SensorDados;

-- CONSULTAS DE INTERLIGAÇÃO
select * from Usuario join Transportadora 
on idTransportadora = fkTransportadora;

-- 1
select * from Transportadora join Endereco
on idTransportadora = fkTranspEnd;

select * from Transportadora join Caminhao
on idTransportadora = fkTranspCam;

-- 2
select * from Transportadora join Telefone 
on idTransportadora = fkTranspTel;

select * from Caminhao join Produto
on idCaminhao = fkCaminhaoProd;

select * from Caminhao join Sensor
on idCaminhao = fkCaminhaoSens;

select * from Sensor join SensorDados
on idSensor = fkSensor;

-- CONSULTA DADOS ATÉ CLIENTE
select * from Usuario join Transportadora 
on idTransportadora = fkTransportadora join Caminhao 
on idTransportadora = fkTranspCam join Produto 
on idCaminhao = fkCaminhaoProd join Sensor 
on idCaminhao = fkCaminhaoSens join SensorDados
on idSensor = fkSensor
where Usuario.nomeUsuario in ('Marcos', 'Silvia');

-- CONSULTA CAMINHÃO
select * from Caminhao join Produto
on idCaminhao = fkCaminhaoProd join Sensor
on idCaminhao = fkCaminhaoSens join SensorDados
on idSensor = fkSensor
where Caminhao.idCaminhao in ('5', '6');