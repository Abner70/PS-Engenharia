'use strict'

/*
|--------------------------------------------------------------------------
| PortifolioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Portifolio = use('App/Models/Portifolio');


class PortifolioSeeder {
  async run () {
    await Portifolio.createMany([
      {id: 1, nome: 'Foto 1', tipo_id: 2},
      {id: 2, nome: 'Foto 2', tipo_id: 5},
      {id: 3, nome: 'Foto 3', tipo_id: 1},
      {id: 4, nome: 'Foto 4', tipo_id: 3},
      {id: 5, nome: 'Foto 5', tipo_id: 4}
    ])
  }
}

module.exports = PortifolioSeeder
