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
    await Cliente.createMany([
      {id: 1, nome: 'Orion', telefone: 61987894512, email: 'orion@gmail.com',
      cpf: 12345678921, logradouro: 'Avenida Goiás', bairro: 'setor 10',
      numero_lote: 25, uf:'GO', municipio: 'Águas Lindas', cep: 72550456},

      {id: 2, nome: 'Marcelo', telefone: 61987894513, email: 'marcelo@gmail.com',
      cpf: 12345678921, logradouro: 'Avenida Paraiso', bairro: 'setor 9',
      numero_lote: 26, uf:'GO', municipio: 'Águas Lindas', cep: 72550455},

      {id: 3, nome: 'Marcos', telefone: 61987894514, email: 'marcos@gmail.com',
      cpf: 12345678921, logradouro: 'Avenida jk', bairro: 'setor 8',
      numero_lote: 27, uf:'GO', municipio: 'Águas Lindas', cep: 72550454},

      {id: 4, nome: 'João', telefone: 61987894515, email: 'joao@gmail.com',
      cpf: 12345678921, logradouro: 'Avenida Pérola', bairro: 'setor 7',
      numero_lote: 28, uf:'GO', municipio: 'Aguas Lindas', cep: 72550453},

      {id: 5, nome: 'Abner', telefone: 61987894516, email: 'abner@gmail.com',
      cpf: 12345678921, logradouro: 'Avenida Berseba', bairro: 'setor 6',
      numero_lote: 29, uf:'GO', municipio: 'Águas Lindas', cep: 72550452},
    ])
  }
}

module.exports = ClienteSeeder
