create database hLol;

use hLol;

create table campeao(
idcampeao int primary key auto_increment,
NomeCampeao varchar(45));


create table rota(
idRota int primary key ,
NomeRota varchar(8));

create table timeLOL(
idTime int primary key,
NomeTIme varchar(45));

create table jogador(
idJogador int primary key,
nomeJogador varchar(45), 
Nick varchar(30),
email varchar(45),
senha varchar(45),
dataNascimento date,
fkrota int ,
foreign key (fkrota) references rota(idrota),
fkcampeao int ,
foreign key (fkcampeao) references  campeao(idcampeao),
fktime int default null,
foreign key (fktime) references timeLOL(idTime)
);

drop table jogador;

insert into rota values(1,'TOPO') , (2,'SELVA'),(3,'MEIO'), (4,'ATIRADOR'),(5,'SUPORTE');

INSERT INTO campeao value ( null ,'Aatrox');
desc campeao;

select *  from campeao; 


insert into jogador values(1,'Daniel Soares Zacarias dos Santos','DSZDS','DanielSantos19.anjo@hotmail.com','1234','2002-11-20',1, 1, null);

select nomejogador, nick, email, md5(senha) as senha, NomeRota as 'Principal Rota', NomeCampeao as 'Campeão Favorito' from jogador, rota, campeao where idcampeao = fkcampeao and idrota = fkrota;

