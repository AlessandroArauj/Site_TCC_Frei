import { Router } from 'express';
import { CadastrarUsuario } from '../repository/usuarioCadastroRepository.js';

const server = Router();

server.post('/cliente', async (req, resp) =>{

    try {
        const usuario = req.body
        const resposta = await CadastrarUsuario(usuario)

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        
        })
    }
});

export default server;