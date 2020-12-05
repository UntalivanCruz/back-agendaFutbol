// Uncomment these imports to begin using these cool features!
import {VListadoPartidos} from '../models';
import { repository } from '@loopback/repository';
import { get,getModelSchemaRef, param } from '@loopback/rest';
import { EncuentrosRepository } from '../repositories';

// import {inject} from '@loopback/core';

export class VistasController {
  constructor(
    @repository(EncuentrosRepository) public repositoryEncuentros: EncuentrosRepository
  ) { }

  @get('partidos-mas-goles')
  async vmaxgoleadores() {
    return await this.repositoryEncuentros.execute(
      'select * from vMaximosGoleadores'
    );
  }

  @get('/v-listado-partidos', {
    responses: {
      '200': {
        description: 'Array of VListadoPartidos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VListadoPartidos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
  ) {
    return await this.repositoryEncuentros.execute('select * from vListadoPartidos');
  }
}
