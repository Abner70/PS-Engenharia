'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')


class Portifolio extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|min:2|max:45',
      tipos_id: 'required|integer'
    }
  }
}

module.exports = Portifolio
