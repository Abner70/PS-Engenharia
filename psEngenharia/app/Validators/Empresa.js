'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Empresa extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|min:2|max:45',
      cnpj: 'required|min:12|max:20',
      telefone: 'required|min:11|max:15',
      email: 'required|email',
      instagram: 'required|max:100',
      whatsapp: 'required|min:12|max:15',
      url_img_fundo: 'required|max:150',
      cep: 'required|integer',
      logradouro: 'required|min:3|max:45',
      bairro: 'required|min:3|max:45',
      numero_lote: 'required|integer',
      uf: 'required|min:1|max:2',
      municipio: 'required|min:2|max:45'
    }
  }
}

module.exports = Empresa
