'use strict'

const User = use('App/Models/User')

class AuthController {
  /**
  * @swagger
  * /register:
  *   get:
  *     tags:
  *       - Usuários
  *     summary: Registrar um novo usuário no sistema
  *     responses:
  *       200:
  *         description: Mostra a listagem de ferramentas
  *         example: []
  */
  async register({ request }){
    const data = request.only(['username','email','password'])

    const user = await User.create(data)

    return user
  }

  async authenticate({ request, auth }){
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
