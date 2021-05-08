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
         email:'ps_engenharia@gmail.com', endereco: 'Avenida Brasil 2205 , Centro ', 
         instagram: 'ps_engenharia@instagram', whatsapp: 61998923541, 
         url_img_fundo: 'https://foto-principal.com.br'}
      ])
  }
}

module.exports = EmpresaSeeder
