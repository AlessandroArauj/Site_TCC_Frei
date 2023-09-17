import { Router } from "express";
import { ExibirTodosProdutos, inserirProduto } from "../repository/produtoRepository.js";


const server = Router();

server.post('/produto', async (req,resp) =>{
    try {
        
        const produto = req.body;
        const resposta = await inserirProduto();

        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um Erro'
        
        })
        
    }

});


server.get('/produto', async (req, resp) =>{

    try {
        
        const resposta = await ExibirTodosProdutos();
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um Erro'
        })
    }
})


export default server;