'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments();
      table.string('nome', 45).notNullable();
      table.integer('telefone').notNullable();
      table.string('endereco', 100).notNullable();
      table.string('email', 60).notNullable();
      table.bigInteger('cpf').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
