'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Servico extends ValidatorAbstract {
  get rules () {
    return {
      servico_id: 'required|integer',
      projeto_id: 'required|integer',
    }
  }
}

module.exports = Servico
