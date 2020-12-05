use master
go
drop database agendafutbol
go
CREATE DATABASE agendaFutbol
go
use agendaFutbol
go
Create table equipo(
id int not null identity(1,1),
nombre varchar(250) not null,
colorUniforme1 varchar(250),
colorUniforme2 varchar(250),
constraint pkEquipo primary key(id)
)
go
Create table estadio(
id int not null identity(1,1),
nombre varchar(250) not null,
ubicacion varchar(max),
constraint pkEstadio primary key(id)
)
go
Create table encuentros(
id int not null identity(1,1),
fechaHora datetime not null,
--ligaId int not null,
equipoLocalId int not null,
equipoVisitanteId int not null,
estadioId int not null,
golesLocal int null default 0,
golesVisitante int null default 0,
constraint pkEncuentros primary key(id),
constraint fkEquipoLocal foreign key(equipoLocalId) references Equipo(Id),
constraint fkEquipoVisitante foreign key(equipoVisitanteId) references Equipo(Id),
constraint fkEstadioEncuentro foreign key(estadioId) references Estadio(Id),
constraint ckEquipos CHECK(equipoLocalId<>equipoVisitanteId)
)
go
use agendaFutbol
select * from equipo
select * from estadio
select * from encuentros

select * from ligas

--id
--nombre
--cantidad
--ida/vuelta