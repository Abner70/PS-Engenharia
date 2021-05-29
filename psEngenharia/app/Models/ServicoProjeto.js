'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServicoProjeto extends Model {
    static getCamposCadastro(){
        return ['servico_id','projeto_id']
    }
}

module.exports = ServicoProjeto
