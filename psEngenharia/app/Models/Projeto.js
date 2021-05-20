'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Projeto extends Model {
    static getCamposCadastro(){
        return ['nome', 'tipo_servico', 'tipos_id','clientes_id']
    }
    cliente(){
        return this.belongsTo('App/Models/Cliente')
    }
}

module.exports = Projeto
