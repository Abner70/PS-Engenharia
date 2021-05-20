'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Empresa = use('App/Models/Empresa');

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return Empresa.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new empresa.
   * GET empresas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Empresa.getCamposCadastro();
    const dados = request.only(campos);
    return await Empresa.create(dados);
  }

  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Empresa.query()
                        .where('id', params.id)
                        //.with('projetos')
                        .first();
  }

  /**
   * Render a form to update an existing empresa.
   * GET empresas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update empresa details.
   * PUT or PATCH empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await Empresa.getCamposCadastro();
    const dados = request.only(campos);
    const empresa = await Empresa.findOrFail(params.id);
    empresa.merge(dados);
    await empresa.save();
    return empresa;
    // const empresa = await Empresa.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // empresa.merge(dados)
    // return await empresa.save();
  }

  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id);
    return await empresa.delete();
  }
}

module.exports = EmpresaController


