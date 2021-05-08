'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PortifolioSchema extends Schema {
  up () {
    this.create('portifolios', (table) => {
      table.increments();
      table.string('nome', 45).notNullable();
      table.integer('tipos_id').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('portifolios')
  }
}

module.exports = PortifolioSchema
