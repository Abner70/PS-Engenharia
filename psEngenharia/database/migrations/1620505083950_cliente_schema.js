'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments();
      table.string('nome', 45).notNullable();
      table.string('telefone', 15).notNullable();
      table.string('email', 60).notNullable();
      table.bigInteger('cpf').notNullable();
      table.string('logradouro', 100).notNullable();
      table.string('bairro', 45).notNullable();
      table.integer('numero_lote').notNullable();
      table.string('uf', 2).notNullable();
      table.string('municipio', 45).notNullable();
      table.integer('cep').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
