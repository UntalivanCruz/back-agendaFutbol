import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Encuentros} from '../models';
import {EncuentrosRepository} from '../repositories';

export class EncuentroController {
  constructor(
    @repository(EncuentrosRepository)
    public encuentrosRepository : EncuentrosRepository,
  ) {}

  @post('/encuentros', {
    responses: {
      '200': {
        description: 'Encuentros model instance',
        content: {'application/json': {schema: getModelSchemaRef(Encuentros)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encuentros, {
            title: 'NewEncuentros',
            exclude: ['id'],
          }),
        },
      },
    })
    encuentros: Omit<Encuentros, 'id'>,
  ): Promise<Encuentros> {
    return this.encuentrosRepository.create(encuentros);
  }

  @get('/encuentros/count', {
    responses: {
      '200': {
        description: 'Encuentros model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Encuentros) where?: Where<Encuentros>,
  ): Promise<Count> {
    return this.encuentrosRepository.count(where);
  }

  @get('/encuentros', {
    responses: {
      '200': {
        description: 'Array of Encuentros model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Encuentros, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Encuentros) filter?: Filter<Encuentros>,
  ): Promise<Encuentros[]> {
    return this.encuentrosRepository.find(filter);
  }

  @patch('/encuentros', {
    responses: {
      '200': {
        description: 'Encuentros PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encuentros, {partial: true}),
        },
      },
    })
    encuentros: Encuentros,
    @param.where(Encuentros) where?: Where<Encuentros>,
  ): Promise<Count> {
    return this.encuentrosRepository.updateAll(encuentros, where);
  }

  @get('/encuentros/{id}', {
    responses: {
      '200': {
        description: 'Encuentros model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Encuentros, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Encuentros, {exclude: 'where'}) filter?: FilterExcludingWhere<Encuentros>
  ): Promise<Encuentros> {
    return this.encuentrosRepository.findById(id, filter);
  }

  @patch('/encuentros/{id}', {
    responses: {
      '204': {
        description: 'Encuentros PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Encuentros, {partial: true}),
        },
      },
    })
    encuentros: Encuentros,
  ): Promise<void> {
    await this.encuentrosRepository.updateById(id, encuentros);
  }

  @put('/encuentros/{id}', {
    responses: {
      '204': {
        description: 'Encuentros PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() encuentros: Encuentros,
  ): Promise<void> {
    await this.encuentrosRepository.replaceById(id, encuentros);
  }

  @del('/encuentros/{id}', {
    responses: {
      '204': {
        description: 'Encuentros DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.encuentrosRepository.deleteById(id);
  }
}
