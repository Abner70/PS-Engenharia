'use strict'

/*
|--------------------------------------------------------------------------
| EmpresaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Empresa = use('App/Models/Empresa');

class EmpresaSeeder {
  async run () {
      await Empresa.createMany([
        {nome: 'PS Engenharia', cnpj: '01455219000148', telefone: '61987865451',
         email:'ps_engenharia@gmail.com', 
         instagram: 'ps_engenharia@instagram', whatsapp: 61998923541, 
         url_img_fundo: 'https://foto-principal.com.br',cep: 72901456,
         logradouro: 'Avenida Brasil 2205',
         bairro: 'Centro', numero_lote: 2205, uf: 'DF', municipio: 'Brasília'}
      ])
  }
}

module.exports = EmpresaSeeder
