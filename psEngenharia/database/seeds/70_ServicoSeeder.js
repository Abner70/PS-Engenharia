'use strict'

/*
|--------------------------------------------------------------------------
| ServicoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Servico = use('App/Models/Servico');

class ServicoSeeder {
  async run () {
    await Servico.createMany([
      {id: 1, nome: 'Execução da Obra'},
      {id: 2, nome: 'Reforma'},
      {id: 3, nome: 'Laudos Técnicos'},
      {id: 4, nome: 'Emissão de ART'}
    ])
  }
}

module.exports = ServicoSeeder
