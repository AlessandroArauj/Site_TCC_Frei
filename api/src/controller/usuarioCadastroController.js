import { Router } from 'express';
import {
    AddCartao,
    BuscarComentarioProduto,
    CadastrarComentario,
    CadastrarUsuario,
    EditarDados,
    ExcluirUsuario,
    LoginAdmin,
    LoginUsuario,
    MapearCartaoPorID
} from '../repository/usuarioCadastroRepository.js';

// Cria uma instância de roteador Express
const server = Router();

// Endpoint para login de administrador
server.post('/cliente/login/adm', async (req, resp) => {
    try {
        const email = req.body.email;
        const senha = req.body.senha;

        const linha = await LoginAdmin(email, senha);
        if (linha == undefined) {
            throw new Error('⚠ Credenciais Inválidas ⚠');
        }

        resp.send(linha);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


server.get('/cliente/comentarios/:id', async (req, resp) => {
    try {
        const { id } = req.params
        const resposta = await BuscarComentarioProduto(id)

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/cliente/comentarios', async (req, resp) => {
    try {
        const comentario = req.body
        const resposta = await CadastrarComentario(comentario);

        resp.send(resposta)
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/cliente/cartoes/:id', async (req, resp) => {
    try {
        const { id } = req.params

        const resposta = await MapearCartaoPorID(id)

        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/cliente/cartao', async (req, resp) => {

    try {
        const cartao = req.body
        const resposta = await AddCartao(cartao)

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

// Endpoint para editar informações de um usuário por ID
server.put('/cliente/editar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const usuario = req.body;

        const resposta = await EditarDados(usuario, id);

        if (resposta != 1) {
            throw new Error('Usuário não pode ser alterado');
        } else {
            resp.status(204).send();
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para login de usuário
server.post('/cliente/login', async (req, resp) => {
    try {
        const email = req.body.EMAIL;
        const senha = req.body.SENHA;

        const linha = await LoginUsuario(email, senha);
        if (linha == undefined) {
            throw new Error('⚠ Credenciais Inválidas Ou inexistente ⚠');
        }

        resp.send(linha);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para excluir um usuário por ID
server.delete('/cliente/delete/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await ExcluirUsuario(id);
        if (resposta != 1) {
            throw new Error('Usuário não existe');
        }

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para cadastrar um novo usuário
server.post('/cliente', async (req, resp) => {
    try {
        const usuario = req.body;

        if (!usuario.NOME) throw new Error('⚠ Campo (nome) obrigatório ⚠');
        if (!usuario.DATA) throw new Error('⚠ Campo (data) obrigatório ⚠');
        if (!usuario.TELEFONE) throw Error('⚠ Campo (telefone) obrigatório ⚠');
        if (!usuario.CPF) throw new Error('⚠ Campo (cpf) obrigatório ⚠');
        if (!usuario.ENDERECO) throw new Error('⚠ Campo (endereço) obrigatório ⚠');
        if (!usuario.CIDADE) throw new Error('⚠ Campo (cidade) obrigatório ⚠');
        if (!usuario.EMAIL) throw new Error('⚠ Campo (email) obrigatório ⚠');
        if (!usuario.SENHA) throw new Error('⚠ Campo (senha) obrigatório ⚠');

        const resposta = await CadastrarUsuario(usuario);

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Exporta o roteador para uso em outros arquivos
export default server;
