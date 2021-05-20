'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {
    static getCamposCadastro(){
        return ['nome', 'cnpj', 'telefone','email',
                'instagram', 'whatsapp', 'url_img_fundo',
                'cep','logradouro','bairro','numero_lote',
                'uf','municipio'];
    }
}

module.exports = Empresa
