'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tool extends Model {
  get jsonFields () {
    return [ 'tags' ]
  }

  static boot () {
    super.boot()
    this.addTrait('@provider:Jsonable')
  }
}

module.exports = Tool
