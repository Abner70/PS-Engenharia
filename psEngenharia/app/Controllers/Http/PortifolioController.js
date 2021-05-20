'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Portifolio = use('App/Models/Portifolio');

/**
 * Resourceful controller for interacting with portifolios
 */
class PortifolioController {
  /**
   * Show a list of all portifolios.
   * GET portifolios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return Portifolio.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new portifolio.
   * GET portifolios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new portifolio.
   * POST portifolios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Portifolio.getCamposCadastro();
    const dados = request.only(campos);
    return await Portifolio.create(dados);
  }

  /**
   * Display a single portifolio.
   * GET portifolios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Portifolio.query()
                        .where('id', params.id)
                        //.with('projetos')
                        .first();
  }

  /**
   * Render a form to update an existing portifolio.
   * GET portifolios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update portifolio details.
   * PUT or PATCH portifolios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await Portifolio.getCamposCadastro();
    const dados = request.only(campos);
    const portifolio = await Portifolio.findOrFail(params.id);
    portifolio.merge(dados);
    await portifolio.save();
    return portifolio;
    // const portifolio = await Portifolio.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // portifolio.merge(dados)
    // return await portifolio.save();
  }

  /**
   * Delete a portifolio with id.
   * DELETE portifolios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const portifolio = await Portifolio.findOrFail(params.id);
    return await portifolio.delete();
  }
}

module.exports = PortifolioController


