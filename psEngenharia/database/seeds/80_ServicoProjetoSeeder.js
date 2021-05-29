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
      {id: 1, servico_id: 2, projeto_id: 3},
      {id: 2, servico_id: 4, projeto_id: 4},
      {id: 3, servico_id: 1, projeto_id: 5},
      {id: 4, servico_id: 3, projeto_id: 1}
    ])
  }
}

module.exports = ServicoProjetoSeeder
