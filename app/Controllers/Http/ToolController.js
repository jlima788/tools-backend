'use strict'

const Tool = use('App/Models/Tool')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tools
 */
class ToolController {
  /**
  * @swagger
  * /tools:
  *   get:
  *     tags:
  *       - Ferramentas
  *     summary: Listagem de Ferramentas
  *     responses:
  *       200:
  *         description: Mostra a listagem de ferramentas
  *         example:
  */
  /**
   * Show a list of all tools.
   * GET tools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const tag = request.input('tag');
    let tools

    (typeof tag != 'undefined') ? tools = await Tool.query().where('tags', 'LIKE', '%' + tag + '%').fetch() : tools = await Tool.all()

    return tools

  }

  /**
   * Create/save a new tool.
   * POST tools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['title','link','description','tags'])
    const tool = await Tool.create({ user_id: auth.user.id, ...data })

    return tool
  }

  /**
   * Delete a tool with id.
   * DELETE tools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const tool = await Tool.findOrFail(params.id)

    if(tool.user_id != auth.user.id){
      return response.status(401)
    }

    await tool.delete()
  }
}

module.exports = ToolController
