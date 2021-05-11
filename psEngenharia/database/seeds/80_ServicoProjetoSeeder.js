'use strict'

/*
|--------------------------------------------------------------------------
| ServicoProjetoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const ServicoProjeto = use('App/Models/ServicoProjeto');

class ServicoProjetoSeeder {
  async run () {
    await ServicoProjeto.createMany([
      {id: 1, servicos_id: 2, projetos_id: 3},
      {id: 2, servicos_id: 4, projetos_id: 4},
      {id: 3, servicos_id: 1, projetos_id: 5},
      {id: 4, servicos_id: 3, projetos_id: 1}
    ])
  }
}

module.exports = ServicoProjetoSeeder
