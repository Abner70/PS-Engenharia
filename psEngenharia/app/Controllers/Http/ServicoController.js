'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Servico = use('App/Models/Servico');

/**
 * Resourceful controller for interacting with servicos
 */
class ServicoController {
  /**
   * Show a list of all servicos.
   * GET servicos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return Servico.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new servico.
   * GET servicos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new servico.
   * POST servicos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Servico.getCamposCadastro();
    const dados = request.only(campos);
    return await Servico.create(dados);
  }

  /**
   * Display a single servico.
   * GET servicos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Servico.query()
                        .where('id', params.id)
                        //.with('projetos')
                        .first();
  }

  /**
   * Render a form to update an existing servico.
   * GET servicos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update servico details.
   * PUT or PATCH servicos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await Servico.getCamposCadastro();
    const dados = request.only(campos);
    const servico = await Servico.findOrFail(params.id);
    servico.merge(dados);
    await servico.save();
    return servico;
    // const servico = await Servico.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // servico.merge(dados)
    // return await servico.save();
  }

  /**
   * Delete a servico with id.
   * DELETE servicos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const servico = await Servico.findOrFail(params.id);
    return await servico.delete();
  }
}

module.exports = ServicoController


