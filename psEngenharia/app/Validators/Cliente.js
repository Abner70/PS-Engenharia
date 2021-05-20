'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Cliente extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|min:2|max:45',
      telefone: 'required|min:11|max:15',
      email: 'email',
      cpf: 'required|integer',
      logradouro: 'required|min:3|max:100',
      bairro: 'required|min:3|max:45',
      numero_lote: 'required|integer',
      uf: 'required|min:1|max:2',
      municipio: 'required|min:2|max:45',
      cep: 'required|integer'
    }
  }
}

module.exports = Cliente
