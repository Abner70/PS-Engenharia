'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetoSchema extends Schema {
  up () {
    this.create('projetos', (table) => {
      table.increments();
      table.string('nome', 45).notNullable();
      table.string('tipo_servico', 70).notNullable();
      table.integer('tipo_id').references('id').inTable('tipos').unsigned().notNullable();
      table.integer('cliente_id').references('id').inTable('clientes').unsigned().notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('projetos')
  }
}

module.exports = ProjetoSchema
