'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Foto extends ValidatorAbstract{
  get rules () {
    return {
      url: 'required|max:45',
      portifolio_id: 'required|integer'
    }
  }
}

module.exports = Foto
