'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    Tool:
*      type: object
*      properties:
*        id:
*          type: uint
*        user_id:
*          type: uint
*        title:
*          type: string
*        link:
*          type: string
*        description:
*          type: string
*        tags:
*          type: string
*      required:
*        - user_id
*/
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
