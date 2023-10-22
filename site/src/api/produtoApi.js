import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function adicionarProduto(marca, categoria, nome, preco, precoPromo, destaque, promo, disponivel, estoque, descricao){
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
    
    

}


