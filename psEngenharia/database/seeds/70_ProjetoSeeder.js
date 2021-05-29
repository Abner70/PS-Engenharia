'use strict'

/*
|--------------------------------------------------------------------------
| ProjetoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Projeto = use('App/Models/Projeto');


class ProjetoSeeder {
  async run () {
    await Projeto.createMany([
      {id: 1, nome: 'Arquitetônico', tipo_servico: 'Projeto 3D', tipo_id: 1, cliente_id: 2},
      {id: 2, nome: 'Elétrico', tipo_servico: 'Infraestrutura e Cabeamento', tipo_id: 3, cliente_id: 4},
      {id: 3, nome: 'Hidráulico', tipo_servico: 'Infraestrutura e Encanamento', tipo_id: 2, cliente_id: 5},
      {id: 4, nome: 'Combate Incêndio', tipo_servico: 'Infraestrutura e Cabeamento', tipo_id: 1, cliente_id: 1},
      {id: 5, nome: 'Ar Condicionado', tipo_servico: 'Infraestrutura e Tubulação', tipo_id: 3, cliente_id: 3}
    ])
  }
}

module.exports = ProjetoSeeder
