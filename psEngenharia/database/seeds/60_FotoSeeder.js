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
    await Foto.createMany([
      {id : 1, url: 'url.foto.com.br', portifolio_id: 1},
      {id : 2, url: 'url.foto.com.br', portifolio_id: 2},
      {id : 3, url: 'url.foto.com.br', portifolio_id: 3},
      {id : 4, url: 'url.foto.com.br', portifolio_id: 4},
      {id : 5, url: 'url.foto.com.br', portifolio_id: 5}
    ])
  }
}

module.exports = FotoSeeder
