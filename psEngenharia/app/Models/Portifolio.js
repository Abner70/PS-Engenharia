'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Portifolio extends Model {
    static getCamposCadastro(){
        return ['nome', 'tipo_id'];
    }
    fotos(){
        return this.hasMany('App/Models/Foto')
    }
    tipo(){
        return this.belongsTo('App/Models/Tipo')
    }
}

module.exports = Portifolio
