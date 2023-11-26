--  drop database FruitTechV1;
use FruitTech;

-- DESCRIÇÃO
describe Transportadora;
describe Funcionario;
describe Endereco;
describe Caminhao;
describe Telefone;
describe Produto;
describe Sensores;
describe SensoresDados;

-- INSERÇÃO DE DADOS

    insert into Transportadora values
    (null, 'MamãoTransp', '23.444.416/0001-02', 'mamaotransp@gmail.com', 'formosapapaya'),
    (null, 'FruitServices', '62.909.591/0001-71', 'fruitservices@gmail.com', 'frutasfrescas52'),
    (null, 'TranspTrip', '17.111.662/0001-31', 'transptrip@gmail.com', 'tranptrippassword');
        
    insert into Telefone values
    (null, '1324007755', '13926763364', 1),
    (null, '1620730858', '16934536206', 2),
    (null, '1236076763', '12933181022', 3);

    insert into Endereco values
    (null, 'Bahia', '45987-316', 'Botucatu', 'Rua Clarice Lispector', 'Colina Verde', 310, 'Campo de distribuição', 1),
    (null, 'Amapá', '68901-295', 'Macapá', 'Avenida Cônego Domingos Maltês','Santa Rita', 215, 'Mercado Boa-vista', 2),
    (null, 'São Paulo', '13847-018', 'Mogi Guaçu', 'Praça Buenos Aires', 'Arruamento Primavera', 45, 'Farmácia Drogasil', 3);

    insert into Funcionario values
    (null, 'Roberto', 'Manci', '080.907.190-82', 'usuario573', 1),
    (null, 'Livia', 'Santana', '513.472.930-19', 'usuario521', 2),
    (null, 'Felipe', 'Norberto', '068.167.720-16', 'usuario592', 3);

    insert into Sensores values 
    (null, 'd359b288-4c91-4d19-a5c0-a16e5fb14f46'),
    (null, 'effdb61a-8729-4ef0-9903-0743b0408af9'),
    (null, '5382f6e3-9312-4a28-bbff-73e10fa23eb1'),
    (null, 'b1bb8c34-f386-4f04-a73a-ee6d8c3d8e99'),
    (null, 'd2dfbe39-0728-49c0-aed9-a5ca8c3f2bad'),
    (null, 'da5b8948-423f-4a07-b880-7261c6f985fb');

    insert into Caminhao values
    (null ,'Volkswagem', 'DELIVERY EXPRESS', '2TxbPH5KU69aB6313', '1.91', '2.53', 1, 1),
    (null, 'Mercedes-Benz', 'MB 2429', '5lrCYgpAAP6U89116', '2.30', '3.53', 1, 2),
    (null, 'Mercedes-Benz', 'MB 815', '7bjgA9fHbm84P2767', '3.00', '3.00', 2, 3),
    (null, 'Ford', 'CARGO 2429', '7H9A8GrNUj1AB0517', '4.00', '2.50', 2, 4),
    (null, 'Volkswagen', 'VW 10160', '2s50dLyRW5l4Y7979', '2.90', '3.50', 3, 5),
    (null, 'Iveco', 'DAILY 35-150', '4Ac8VT29K4T1K8565', '6.00', '3.00', 3, 6);

/* insert into SensoresDados values
(null, 1, '82.00', '11.00'),
(null, 1, '83.00', '11.00'),
(null, 2, '83.00', '12.00'),
(null, 2, '85.00', '12.00');
*/

/*
-- CONSULTAS
select * from Transportadora;
select * from Usuario;
select * from Endereco;
select * from Caminhao;
select * from Telefone;
select * from Produto;
select * from Sensor;
select * from SensorDadosDHT11;
select * from SensorDadosLM35;

-- CONSULTAS DE INTERLIGAÇÃO
select * from Usuario join Transportadora 
on idTransportadora = fkTransportadora;

select * from Transportadora join Endereco
on idTransportadora = fkTranspEnd;

select * from Transportadora join Caminhao
on idTransportadora = fkTranspCam;

select * from Transportadora join Telefone 
on idTransportadora = fkTranspTel;

select * from Caminhao join Produto
on idCaminhao = fkCaminhaoProd;

select * from Caminhao join Sensor
on idCaminhao = fkCaminhaoSens;

select * from Sensor join SensorDadosDHT11
on idSensor = fkSensorDHT;

select * from Sensor join SensorDadosLM35
on idSensor = fkSensorLM;

-- CONSULTA DADOS ATÉ CLIENTE
select * from Usuario join Transportadora 
on idTransportadora = fkTransportadora join Caminhao 
on idTransportadora = fkTranspCam join Produto 
on idCaminhao = fkCaminhaoProd join Sensor 
on idCaminhao = fkCaminhaoSens join SensorDadosLM35
on idSensor = fkSensorLM;

select * from Usuario join Transportadora 
on idTransportadora = fkTransportadora join Caminhao 
on idTransportadora = fkTranspCam join Produto 
on idCaminhao = fkCaminhaoProd join Sensor 
on idCaminhao = fkCaminhaoSens join SensorDadosDHT11
on idSensor = fkSensorDHT;

select * from Usuario join Transportadora 
on idTransportadora = fkTransportadora join Caminhao 
on idTransportadora = fkTranspCam join Produto 
on idCaminhao = fkCaminhaoProd join Sensor 
on idCaminhao = fkCaminhaoSens join SensorDadosDHT11
on idSensor = fkSensorDHT join SensorDadosLM35
on idSensor = fkSensorLM;

-- CONSULTA CAMINHÃO
select * from Caminhao join Produto
on idCaminhao = fkCaminhaoProd join Sensor
on idCaminhao = fkCaminhaoSens join SensorDados
on idSensor = fkSensor
where Caminhao.idCaminhao in ('5', '6');*/