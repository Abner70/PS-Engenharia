'use strict'

class ValidatorAbstract{

    get validateAll(){    // retorna todas as mensagens de validaçao de uma vez.
            return true;     //false retorna apenas 1
    }
    get messages (){ // retorna apenas uma message
        return {
            'required': "O campo '{{ field }}'é obrigatório",
            'max': "O campo '{{ field }}' ultrapassou o Máximo",
            'min': "O campo '{{ field }}' não atingiu o valor mínimo",
            'integer': "O campo '{{ field }}' precisa ser numérico",
            'email': "O campo '{{ field }}' precisa ser um email válido",
            
        }
    }

    async fails (errorMessages){ 
        return this.ctx.response.status(400).send(errorMessages);
        }
}
module.exports = ValidatorAbstract