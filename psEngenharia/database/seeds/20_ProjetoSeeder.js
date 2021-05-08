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
  }
}

module.exports = ProjetoSeeder
