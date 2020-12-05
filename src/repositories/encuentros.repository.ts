import {DefaultCrudRepository} from '@loopback/repository';
import {Encuentros, EncuentrosRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EncuentrosRepository extends DefaultCrudRepository<
  Encuentros,
  typeof Encuentros.prototype.id,
  EncuentrosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Encuentros, dataSource);
  }
}
