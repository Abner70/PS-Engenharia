'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Servico extends ValidatorAbstract {
  get rules () {
    return {
      username: 'required|min:2|max:45',
      email: 'required|email',
      password: 'required|min:2'
    }
  }
}

module.exports = Servico
