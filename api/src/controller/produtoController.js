import { Router } from "express";
import { AdicionarImagens, AlterarProduto, DeletarProduto, ExibirTodosFiltroNome, ExibirTodosProdutos, inserirProduto } from "../repository/produtoRepository.js";
import { buscarMarcasPorId, listarMarcas } from "../repository/produtosmarcasRepository.js";

import multer from 'multer'

const upload = multer({ dest: 'storage/fotosProdutos' })
const server = Router();

server.get('/produto/nome', async (req, resp) =>{
    try {
        const nome = req.query.nome;
        const resp = await ExibirTodosFiltroNome(nome);
        resp.send(resp);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.get('/produto/marca', async (req, resp) => {
    let r = await listarMarcas();
    resp.send(r)
})

server.delete('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await DeletarProduto(id);
        if (resposta != 1)
            throw new Error('Tarefa não pode ser removida')
        
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})

server.put('/produto/:id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const produto = req.body;

        const resposta = await AlterarProduto(produto, id);
        if (resposta != 1)
            throw new Error('produto não pode ser alterado')
        else
            resp.status(204).send();
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.post('/produto/:id/imagem', upload.single('produtosIma'), async (req, resp) => {
    try {
        const imagem = req.file.path;
        const idProduto = req.params.id; 
        const resposta = await AdicionarImagens(imagem, idProduto);

        if (resposta != 1)
            throw new Error('A imagem não pode ser adicionada.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

server.post('/produto', async (req,resp) =>{
    try {
        
        const produto = req.body;
        const resposta = await inserirProduto(produto);

        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        
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