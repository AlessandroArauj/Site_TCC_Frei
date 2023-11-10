import axios from "axios";
import { URL_API } from "../constant";

const api = axios.create({
    baseURL: URL_API
});



export async function ListarProdutosDestaques() {
    const resposta = await api.get('/produto/destaques');
    return resposta.data;
}

export async function ListarProdutosPorID(id) {
    const resposta = await api.get(`/produto/${id}`)
    return resposta.data

}

export async function ListarProdutosPorNome(nome) {
    const resposta = await api.get(`/produto/busca?nome=${nome}`);
    return resposta.data;
}


export async function ListarTodosProdutos() {
    const resposta = await api.get('/produto');
    return resposta.data;
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

export async function EnviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('produtosIma', imagem)
    const resposta = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })

    return resposta.status; 
}

export async function DeletarProduto(id) {
    const resposta = await api.delete(`/produto/${id}`);
    return resposta.status
}

export function BuscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}











