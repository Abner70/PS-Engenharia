'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicoProjetoSchema extends Schema {
  up () {
    this.create('servico_projetos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('servico_projetos')
  }
}

module.exports = ServicoProjetoSchema
