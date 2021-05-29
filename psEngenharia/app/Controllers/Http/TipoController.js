'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tipo = use('App/Models/Tipo');

/**
 * Resourceful controller for interacting with tipos
 */
class TipoController {
  /**
   * Show a list of all tipos.
   * GET tipos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return Tipo.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new tipo.
   * GET tipos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new tipo.
   * POST tipos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Tipo.getCamposCadastro();
    const dados = request.only(campos);
    return await Tipo.create(dados);
  }

  /**
   * Display a single tipo.
   * GET tipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Tipo.query()
                        .where('id', params.id)
                        .with('projetos')
                        .with('portifolios')
                        .first();
  }

  /**
   * Render a form to update an existing tipo.
   * GET tipos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tipo details.
   * PUT or PATCH tipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await Tipo.getCamposCadastro();
    const dados = request.only(campos);
    const tipo = await Tipo.findOrFail(params.id);
    tipo.merge(dados);
    await tipo.save();
    return tipo;
    // const tipo = await Tipo.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // tipo.merge(dados)
    // return await tipo.save();
  }

  /**
   * Delete a tipo with id.
   * DELETE tipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const tipo = await Tipo.findOrFail(params.id);
    return await tipo.delete();
  }
}

module.exports = TipoController


