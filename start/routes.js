'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user', 'AuthController.cadastrar')
Route.post('/logar', 'AuthController.logar')

Route.group(() => {
  Route.resource('tools', 'ToolController').apiOnly().except(['update', 'show'])
}).middleware('auth')
