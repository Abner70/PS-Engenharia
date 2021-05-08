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
  }
}

module.exports = PortifolioSeeder
