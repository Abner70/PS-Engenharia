'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Tipo extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|min:2|max:45'
    }
  }
}

module.exports = Tipo
