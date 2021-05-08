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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/empresa', 'EmpresaController').apiOnly();
Route.resource('/projeto', 'ProjetoController').apiOnly();
Route.resource('/cliente', 'ClienteController').apiOnly();
Route.resource('/portifolio', 'PortifolioController').apiOnly();
Route.resource('/tipo', 'TipoController').apiOnly();
Route.resource('/foto', 'FotoController').apiOnly();
Route.resource('/servico', 'ServicoController').apiOnly();
Route.resource('/servico-projeto', 'ServicoProjetoController').apiOnly();
