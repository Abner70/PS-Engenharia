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
  }
}

module.exports = ServicoSeeder
