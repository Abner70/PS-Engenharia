'use strict'

const User = use('App/Models/User');

class UserController {
    async index(){
        return User.query().select(['id', 'username', 'email']).fetch()
    }
    
    async show({params}){
        return User.query().select(['id', 'username', 'email']).where('id', params.id).first()
    }
    async store ({request}){

        const camposCadastro = ['username', 'email', 'password']
        const dados = request.only(camposCadastro)
        return await User.create(dados)
    }
    async update ({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        const dados = request.only(['username', 'email', 'password']);
        user.merge(dados)
        return await user.save();

        // const campos = await Tipo.getCamposCadastro();
        // const dados = request.only(campos);
        // const tipo = await Tipo.findOrFail(params.id);
        // tipo.merge(dados);
        // await tipo.save();
        // return tipo;
      }
      async destroy ({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        return await user.delete();
      }
    
    async token({request,  auth}){
        const {email, password} = request.all()
        return await auth.attempt(email, password)
    }
}

module.exports = UserController
