import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function ListarProdutosPorNome(nome) {
    const resposta = await api.get(`/produto/busca?nome${nome}`);
    return resposta.data;
}

export async function ListarTodosProdutos() {
    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function adicionarImagem(imagem, id) {
    const formData = new FormData();
    formData.append('produtosIma',)
    const resposta = await api(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },

    });

    return resposta.status

}

export async function adicionarProduto(marca, categoria, nome, preco, precoPromo, destaque, promo, disponivel, estoque, descricao) {
    const resposta = await api.post('/produto', {
        MARCAS: marca,
        CATEGORIA: categoria,
        PRODUTO: nome,
        PRECO: preco,
        PRECO_PROMOCIONAL: precoPromo,
        DESTAQUE: destaque,
        PROMOCAO: promo,
        DISPONIVEL: disponivel,
        ESTOQUE: estoque,
        DETALHE: descricao

    });

    return resposta.data

}


