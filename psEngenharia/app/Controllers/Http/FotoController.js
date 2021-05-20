'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Foto = use('App/Models/Foto');

/**
 * Resourceful controller for interacting with fotos
 */
class FotoController {
  /**
   * Show a list of all fotos.
   * GET fotos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perpage} = request.all()
    return Foto.query().paginate(page, perpage);

  }

  /**
   * Render a form to be used for creating a new foto.
   * GET fotos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new foto.
   * POST fotos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Foto.getCamposCadastro();
    const dados = request.only(campos);
    return await Foto.create(dados);
  }

  /**
   * Display a single foto.
   * GET fotos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Foto.query()
                        .where('id', params.id)
                        //.with('projetos')
                        .first();
  }

  /**
   * Render a form to update an existing foto.
   * GET fotos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update foto details.
   * PUT or PATCH fotos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = await Foto.getCamposCadastro();
    const dados = request.only(campos);
    const foto = await Foto.findOrFail(params.id);
    foto.merge(dados);
    await foto.save();
    return foto;
    // const foto = await Foto.findOrFail(params.id);
    // const dados = request.only(['nome', 'telefone','email','cep','municipio','uf','numero_lote','cpf','bairro','logradouro']);
    // foto.merge(dados)
    // return await foto.save();
  }

  /**
   * Delete a foto with id.
   * DELETE fotos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const foto = await Foto.findOrFail(params.id);
    return await foto.delete();
  }
}

module.exports = FotoController


