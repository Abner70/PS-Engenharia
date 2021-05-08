'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetoSchema extends Schema {
  up () {
    this.create('projetos', (table) => {
      table.increments();
      table.string('nome', 45).notNullable();
      table.string('tipo_servico', 70).notNullable();
      table.integer('tipos_id').notNullable();
      table.integer('clientes_id').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('projetos')
  }
}

module.exports = ProjetoSchema
