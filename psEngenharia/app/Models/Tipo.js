'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tipo extends Model {
    static getCamposCadastro(){
        return ['nome']; 

    }
    portifolios(){
        return this.hasMany('App/Models/Portifolio');
    }
    
    projetos(){
        return this.hasMany('App/Models/Projeto');
    }
}

module.exports = Tipo
