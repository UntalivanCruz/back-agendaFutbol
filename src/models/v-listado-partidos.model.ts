import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'vListadoPartidos'}}
})
export class VListadoPartidos extends Entity {
  @property({
    type: 'number',
    precision: 19,
    scale: 0,
    mssql: {columnName: 'Registro', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'YES'},
  })
  registro?: number;

  @property({
    type: 'string',
    required: true,
    length: 250,
    mssql: {columnName: 'Local', dataType: 'varchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  local: string;

  @property({
    type: 'string',
    required: true,
    length: 250,
    mssql: {columnName: 'Visitante', dataType: 'varchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  visitante: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VListadoPartidos>) {
    super(data);
  }
}

export interface VListadoPartidosRelations {
  // describe navigational properties here
}

export type VListadoPartidosWithRelations = VListadoPartidos & VListadoPartidosRelations;
