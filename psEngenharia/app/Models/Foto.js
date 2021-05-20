'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Foto extends Model {
    static getCamposCadastro(){
        return ['url', 'portifolio_id'];
    }
}

module.exports = Foto
