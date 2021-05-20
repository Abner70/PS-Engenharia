'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ServicoProjeto = use('App/Models/Servicoprojeto');

/**
 * Resourceful controller for interacting with servicoprojetos
 */
class ServicoProjetoController {
  /**
   * Show a list of all servicoprojetos.
   * GET servicoprojetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return ServicoProjeto.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new servicoprojeto.
   * GET servicoprojetos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new servicoprojeto.
   * POST servicoprojetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ServicoProjeto.getCamposCadastro();
    const dados = request.only(campos);
    return await ServicoProjeto.create(dados);
  }

  /**
   * Display a single servicoprojeto.
   * GET servicoprojetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await ServicoProjeto.query()
                        .where('id', params.id)
                        //.with('projetos')
                        .first();
  }

  /**
   * Render a form to update an existing servicoprojeto.
   * GET servicoprojetos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update servicoprojeto details.
   * PUT or PATCH servicoprojetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await ServicoProjeto.getCamposCadastro();
    const dados = request.only(campos);
    const servicoprojeto = await ServicoProjeto.findOrFail(params.id);
    servicoprojeto.merge(dados);
    await servicoprojeto.save();
    return servicoprojeto;
    // const servicoprojeto = await Servicoprojeto.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // servicoprojeto.merge(dados)
    // return await servicoprojeto.save();
  }

  /**
   * Delete a servicoprojeto with id.
   * DELETE servicoprojetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const servicoprojeto = await ServicoProjeto.findOrFail(params.id);
    return await servicoprojeto.delete();
  }
}

module.exports = ServicoProjetoController


