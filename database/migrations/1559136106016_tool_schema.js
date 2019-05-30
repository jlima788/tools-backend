'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToolSchema extends Schema {
  up () {
    this.create('tools', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('title')
      table.string('link')
      table.text('description')
      table.text('tags')
      table.timestamps()
    })
  }

  down () {
    this.drop('tools')
  }
}

module.exports = ToolSchema
