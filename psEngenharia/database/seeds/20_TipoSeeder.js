'use strict'

/*
|--------------------------------------------------------------------------
| TipoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Tipo = use('App/Models/Tipo');


class TipoSeeder {
  async run () {
    await Tipo.createMany([
      {id: 1, nome: 'Residencial'},
      {id: 2, nome: 'Predial'},
      {id: 3, nome: 'Comercial'}
    ])
  }
}

module.exports = TipoSeeder
