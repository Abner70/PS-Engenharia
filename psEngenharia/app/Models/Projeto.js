'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Projeto extends Model {
    static getCamposCadastro(){
        return ['nome', 'tipo_servico', 'tipo_id','cliente_id']
    }
    cliente(){
        return this.belongsTo('App/Models/Cliente')
    }
    tipo(){
        return this.belongsTo('App/Models/Tipo')
    }
    servicos(){
        return this.belongsToMany('App/Models/Servico').pivotTable('servico_projetos');
    }

}

module.exports = Projeto
