'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Servico extends Model {
    static getCamposCadastro(){
        return ['nome'];
    }
    projetos(){
        return this.belongsToMany('App/Models/Projeto').pivotTable('servico_projetos');
    }

}

module.exports = Servico
