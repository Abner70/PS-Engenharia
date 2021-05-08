'use strict'

/*
|--------------------------------------------------------------------------
| ClienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Cliente = use('App/Models/Cliente');


class ClienteSeeder {
  async run () {
  }
}

module.exports = ClienteSeeder
