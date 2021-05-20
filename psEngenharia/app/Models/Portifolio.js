'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Portifolio extends Model {
    static getCamposCadastro(){
        return ['nome', 'tipos_id'];
    }
}

module.exports = Portifolio
