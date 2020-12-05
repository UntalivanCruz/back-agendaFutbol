use agendaFutbol

CREATE VIEW vMaximosGoleadores as
select TOP 2 'Partido: ' + e1.nombre + ' vrs ' + e2.nombre Encuentro
,e.golesLocal+e.golesVisitante Goles
from encuentros e
INNER JOIN equipo e1 on e1.id=e.equipoLocalId
INNER JOIN equipo e2 on e2.id=e.equipoVisitanteId
ORDER by Goles desc

select * from encuentros p
JOIN estadio as e on p.estadioId = e.id


Alter view vListadoPartidos as
select ROW_NUMBER() OVER(ORDER BY a.nombre,b.nombre ASC) AS Registro,
a.nombre Local,b.nombre Visitante from equipo a
CROSS JOIN equipo b
where a.id<>b.id

select * from vMaximosGoleadores

select * from vListadoPartidos