import {DefaultCrudRepository} from '@loopback/repository';
import {Estadio, EstadioRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EstadioRepository extends DefaultCrudRepository<
  Estadio,
  typeof Estadio.prototype.id,
  EstadioRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Estadio, dataSource);
  }
}
