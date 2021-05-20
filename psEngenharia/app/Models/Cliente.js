'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    static getCamposCadastro(){
        return ['nome', 'telefone','email',
                'cep','municipio','uf','numero_lote',
                'cpf','bairro','logradouro'];
    }
    projetos(){
        return this.hasMany('App/Models/Projeto')
                 //.select(['id','nome']) // traz os campos separados 
    }
}

module.exports = Cliente
