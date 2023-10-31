import { Router } from "express";
import { AdicionarImagens, AlterarProduto, DeletarProduto, ExibirTodosFiltroNome, ExibirTodosProdutos, ListarImagemPorIDinstrumentos, inserirProduto, listarCategorias } from "../repository/produtoRepository.js";
import { buscarMarcasPorId, listarMarcas } from "../repository/produtosmarcasRepository.js";

import multer from 'multer'

// Configuração do multer para upload de imagens
const upload = multer({ dest: 'storage/fotosProdutos' });

const server = Router();

// Endpoint para obter imagens de produtos por ID
server.get('/produto/imagem/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await ListarImagemPorIDinstrumentos(id);

        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para listar categorias de produtos
server.get('/produto/categoria', async (req, resp) => {
    try {
        const resposta = await listarCategorias();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para buscar produtos por nome
server.get('/produto/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await ExibirTodosFiltroNome(nome);

        if (resposta.length == 0) {
            resp.status(404).send([]);
        } else {
            resp.send(resposta);
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para listar marcas de produtos
server.get('/produto/marca', async (req, resp) => {
    try {
        const resposta = await listarMarcas();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para deletar um produto por ID
server.delete('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await DeletarProduto(id);
        if (resposta != 1)
            throw new Error('Tarefa não pode ser removida');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para atualizar informações de um produto por ID
server.put('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const produto = req.body;
        const resposta = await AlterarProduto(produto, id);
        if (resposta != 1)
            throw new Error('produto não pode ser alterado');
        else
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para adicionar uma imagem a um produto por ID
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

// Endpoint para cadastrar um novo produto
server.post('/produto', async (req, resp) => {
    try {
        const produto = req.body;
        if (!produto.PRODUTO) {
            throw new Error('Nome do produto Obrigatório')
        }

        if (!produto.PRECO) {
            throw new Error('Preço do produto é obrigatória')
        }

        if(!produto.ESTOQUE) {
            throw new Error('Estoque do produto é obrigatória')
        }

        if(!produto.DETALHE) {
            throw new Error('Detalhe do produto é obrigatória')
        }

        if(produto.DISPONIVEL === false) {
            throw new Error('Disponivel do produto é obrigatória')
        }

        const resposta = await inserirProduto(produto);
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

// Endpoint para obter todos os produtos
server.get('/produto', async (req, resp) => {
    try {
        const resposta = await ExibirTodosProdutos();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um Erro'
        });
    }
});

// Exporta o roteador para uso em outros arquivos
export default server;
