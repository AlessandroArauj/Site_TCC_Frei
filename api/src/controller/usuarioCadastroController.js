import { Router } from 'express';
import { CadastrarUsuario, ExcluirUsuario, LoginUsuario } from '../repository/usuarioCadastroRepository.js';

const server = Router();

server.post('/cliente/login', async (req, resp) =>{
    try {
        const email = req.body.email;
        const senha = req.body.senha;

        const linha = await LoginUsuario(email, senha);
        if (linha == undefined){
            throw new Error('⚠ Credencial(is) Invalida ⚠')

        }

        resp.send(linha)
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message

        })
    }

})

server.delete('/cliente/delete/:id', async (req, resp) => {

    try {
        const { id } = req.params;
        const resposta = await ExcluirUsuario(id);
        if (resposta != 1) {

            throw new Error('Usuario não existe')
        }

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message

        })
    }

})


server.post('/cliente', async (req, resp) => {

    try {
        const usuario = req.body

        if (!usuario.NOME)
            throw new Error('⚠ Campo (nome) obrigatório ⚠')
        if (!usuario.DATA)
            throw new Error('⚠ Campo (data) obrigatório ⚠')
        if (!usuario.TELEFONE)
            throw new Error('⚠ Campo (telefone) obrigatório ⚠')
        if (!usuario.CPF)
            throw new Error('⚠ Campo (cpf) obrigatório ⚠')
        if (!usuario.ENDERECO)
            throw new Error('⚠ Campo (endereço) obrigatório ⚠')
        if (!usuario.CIDADE)
            throw new Error('⚠ Campo (cidade) obrigatório ⚠')
        if (!usuario.EMAIL)
            throw new Error('⚠ Campo (email) obrigatório ⚠')
        if (!usuario.SENHA)
            throw new Error('⚠ Campo (senha) obrigatório ⚠')

        const resposta = await CadastrarUsuario(usuario)



        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message

        })
    }
});

export default server;