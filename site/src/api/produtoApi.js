import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function AdicionarProduto(Marca, Categoria, Nome, Preco, PrecoPromo, Destaque, Promo, Disponivel, Estoque, Descricao){
    const r = await api.post('/produto', {
        MARCAS: Marca,
        CATEGORIA: Categoria,
        PRODUTO: Nome,
        PRECO: Preco,
        PRECO_PROMOCIONAL: PrecoPromo,
        DESTAQUE: Destaque,
        PROMOCAO: Promo,
        DISPONIVEL: Disponivel,
        ESTOQUE: Estoque,
        DETALHE: Descricao
        
    })


}


