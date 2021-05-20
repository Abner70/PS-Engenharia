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

Route.resource('/empresa', 'EmpresaController').apiOnly().validator(new Map([ [['store', 'update'], 'Empresa'],]));
Route.resource('/projeto', 'ProjetoController').apiOnly().validator(new Map([ [['store', 'update'], 'Projeto'],]));
Route.resource('/cliente', 'ClienteController').apiOnly().validator(new Map([ [['store', 'update'], 'Cliente'],]));
Route.resource('/portifolio', 'PortifolioController').apiOnly().validator(new Map([ [['store', 'update'], 'Portifolio'],]));
Route.resource('/tipo', 'TipoController').apiOnly().validator(new Map([ [['store', 'update'], 'Tipo'],]));
Route.resource('/foto', 'FotoController').apiOnly().validator(new Map([ [['store', 'update'], 'Foto'],]));
Route.resource('/servico', 'ServicoController').apiOnly().validator(new Map([ [['store', 'update'], 'Servico'],]));
Route.resource('/servico-projeto', 'ServicoProjetoController').apiOnly().validator(new Map([ [['store', 'update'], 'ServicoProjeto'],]));
