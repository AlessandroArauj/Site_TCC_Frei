import axios from "axios";
import { URL_API } from "../constant";



const api = axios.create({
    baseURL: URL_API
});

export async function ListarProdutosPorNome(nome) {
    const resposta = await api.get(`/produto/busca?nome${nome}`);
    return resposta.data;
}

    export async function ListarImagemPorIDinstrumentos(id) {
        const resposta = await api.get(`/produto/imagem/${id}`)
        return resposta.data
    }

export async function ListarTodosProdutos() {
    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function adicionarImagem(imagem, id) {
    const formData = new FormData();
    formData.append('produtosIma', imagem)
    const resposta = await api.post(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },

    });

    return resposta.data

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


export function BuscarImagem(imagem) {
    console.log(imagem);
    return `${api.getUri()}/${imagem}`
}











