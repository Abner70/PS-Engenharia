'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments();
      table.string('nome', 45).notNullable();
      table.string('cnpj', 20).notNullable();
      table.integer('telefone').notNullable();
      table.string('email', 60).notNullable();
      table.string('endereco', 100).notNullable();
      table.string('instagram', 60).notNullable();
      table.integer('whatsapp').notNullable();
      table.string('url_img_fundo', 150).notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
