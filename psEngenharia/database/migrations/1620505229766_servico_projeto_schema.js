'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicoProjetoSchema extends Schema {
  up () {
    this.create('servico_projetos', (table) => {
      table.increments();
      table.integer('servico_id').references('id').inTable('servicos').unsigned().notNullable();
      table.integer('projeto_id').references('id').inTable('projetos').unsigned().notNullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('servico_projetos')
  }
}

module.exports = ServicoProjetoSchema
