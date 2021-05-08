'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PortifolioSchema extends Schema {
  up () {
    this.create('portifolios', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('portifolios')
  }
}

module.exports = PortifolioSchema
