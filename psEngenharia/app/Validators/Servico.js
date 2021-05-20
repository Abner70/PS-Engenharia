'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Servico extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|min:2|max:45'
    }
  }
}

module.exports = Servico
