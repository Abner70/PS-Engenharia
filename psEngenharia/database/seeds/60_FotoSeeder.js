'use strict'

/*
|--------------------------------------------------------------------------
| FotoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Foto = use('App/Models/Foto');


class FotoSeeder {
  async run () {
  }
}

module.exports = FotoSeeder
