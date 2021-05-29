'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Projeto = use('App/Models/Projeto');

/**
 * Resourceful controller for interacting with projetos
 */
class ProjetoController {
  /**
   * Show a list of all projetos.
   * GET projetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return Projeto.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new projeto.
   * GET projetos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new projeto.
   * POST projetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Projeto.getCamposCadastro();
    const dados = request.only(campos);
    return await Projeto.create(dados);
  }

  /**
   * Display a single projeto.
   * GET projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Projeto.query()
                        .with('cliente')
                        .with('tipo')
                        .with('servicos')
                        .where('id', params.id)
                        .first();
  }

  /**
   * Render a form to update an existing projeto.
   * GET projetos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update projeto details.
   * PUT or PATCH projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await Projeto.getCamposCadastro();
    const dados = request.only(campos);
    const projeto = await Projeto.findOrFail(params.id);
    projeto.merge(dados);
    await projeto.save();
    return projeto;
    // const projeto = await Projeto.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // projeto.merge(dados)
    // return await projeto.save();
  }

  /**
   * Delete a projeto with id.
   * DELETE projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const projeto = await Projeto.findOrFail(params.id);
    return await projeto.delete();
  }
}

module.exports = ProjetoController


