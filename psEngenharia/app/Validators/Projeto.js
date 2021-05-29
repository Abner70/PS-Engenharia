'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Projeto extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|min:2|max:45',
      tipo_servico: 'required|min:3|max:70',
      tipo_id: 'required|integer',
      cliente_id: 'required|integer',
    }
  }
}

module.exports = Projeto
