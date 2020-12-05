use agendaFutbol
go
-- Insert rows into table 'equipos'
INSERT INTO equipo
( -- columns to insert data into
 [nombre], [colorUniforme1], [colorUniforme2]
)
VALUES
( -- first row: values for the columns in the list above
 'Platense', 'Blanco y Verde', 'Amarillo'
),
( -- second row: values for the columns in the list above
 'Real España', 'Amarillo y Negro', 'Negro'
),
(
    'Motagua','Azul','Rosado'
),
('Olimpia','Blanco','Gris')
,
('Marathon','Rojo y Verde','Rojo')
-- add more rows here
GO

-- Insert rows into table 'Estadios'
INSERT INTO estadio
( -- columns to insert data into
 nombre, ubicacion
)
VALUES
( -- first row: values for the columns in the list above
 'Estadio Francisco Morazan','San Pedro Sula'
),
( -- second row: values for the columns in the list above
 'Estadio Nacional','Tegucigalpa'
),
(
    'Estadio Exelsio','Puerto Cortes'
),
(
    'Estadio Olimpico','San Pedro Sula'
)
-- add more rows here
GO
-- Insert rows into table 'Encuentros'
INSERT INTO encuentros
( -- columns to insert data into
 FechaHora, EquipoLocalId, EquipoVisitanteId,estadioId,golesLocal,golesVisitante
)
VALUES
( -- first row: values for the columns in the list above
 '20201201 16:00',1,2,1,2,1
),
( -- second row: values for the columns in the list above
 '20201201 19:30',3,4,2,2,2
),
(
    '20201202 14:00',5,2,3,1,3
)
-- add more rows here
GO