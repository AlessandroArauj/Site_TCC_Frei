// Importa a conexão do arquivo "connection.js"
import { con } from "./connection.js";

export async function ListarProdutosPorID(id) {
    const comando = `
        SELECT 
            ID_INSTRUMENTOS AS ID,
            ID_MARCAS AS MARCAS,
            ID_CATEGORIA AS CATEGORIAS,
            NM_PRODUTO AS PRODUTO,
            NR_PRECO AS PRECO,
            NR_PRECO_PROMOCIONAL AS PRECOPROMO,
            BT_DESTAQUE AS DESTAQUE,
            BT_PROMOCAO AS PROMODISP,
            BT_DISPONIVEL AS DISPONIVEL,
            QTD_ESTOQUE AS ESTOQUE,
            DS_DETALHES AS DETALHE,
            IMG_PRODUTO AS IMAGEM
        FROM TB_PRODUTO

        WHERE ID_INSTRUMENTOS = ?
    `

    const [resp] = await con.query(comando, [id]);
    return resp[0];



}







export async function Carrinho(id) {
    const comando = `
        SELECT
                ID_INSTRUMENTOS         AS  "Id",
                NM_PRODUTO              AS  "Produto",
                NR_PRECO                AS  "Preço",
                NR_PRECO_PROMOCIONAL    AS  "Preço promoção",
                IMG_PRODUTO             AS  "IMAGEM"
            FROM TB_PRODUTO
            
        WHERE ID_INSTRUMENTOS = ?
    `;

    const resp = await con.query(comando, [id])

    const linhas = resp[0]
    const linha = linhas[0];

    return linha;
}

export async function ListarProdutosPorCategoria(id) {
    const comando = `
    SELECT 
        ID_INSTRUMENTOS AS ID,
        ID_MARCAS AS MARCAS,
        ID_CATEGORIA AS CATEGORIAS,
        NM_PRODUTO AS PRODUTO,
        NR_PRECO AS PRECO,
        NR_PRECO_PROMOCIONAL AS PRECOPROMO,
        BT_DESTAQUE AS DESTAQUE,
        BT_PROMOCAO AS PROMODISP,
        BT_DISPONIVEL AS DISPONIVEL,
        QTD_ESTOQUE AS ESTOQUE,
        DS_DETALHES AS DETALHE,
        IMG_PRODUTO AS IMAGEM
    FROM TB_PRODUTO

    WHERE ID_CATEGORIA = ? AND BT_DISPONIVEL = 1; 

`

    const [resp] = await con.query(comando, [id]);
    return resp;




}


export async function ListarProdutosDestaques() {
    const comando = `
    SELECT 
            ID_INSTRUMENTOS AS ID,
        ID_MARCAS AS MARCAS,
            ID_CATEGORIA AS CATEGORIAS,
            NM_PRODUTO AS PRODUTO,
            NR_PRECO AS PRECO,
            NR_PRECO_PROMOCIONAL AS PRECOPROMO,
            BT_DESTAQUE AS DESTAQUE,
            BT_PROMOCAO AS PROMODISP,
            BT_DISPONIVEL AS DISPONIVEL,
            QTD_ESTOQUE AS ESTOQUE,
            DS_DETALHES AS DETALHE,
            IMG_PRODUTO AS IMAGEM
        FROM TB_PRODUTO

        WHERE BT_DESTAQUE = 1 AND BT_DISPONIVEL = 1;
    `
    const [resp] = await con.query(comando)
    return resp;

}


export async function listarCategoriasIDNomes(id) {
    const comando = `
        SELECT NM_CATEGORIA AS Categoria
        FROM TB_CATEGORIA
        WHERE ID_CATEGORIA = ?
    `
    const [resp] = await con.query(comando, [id])
    return resp[0];
}


// Função para listar todas as categorias
export async function listarCategorias() {
    // Define o comando SQL para listar todas as categorias
    const comando = `
        SELECT NM_CATEGORIA AS Categoria, ID_CATEGORIA AS Id
        FROM TB_CATEGORIA
        `;

    // Executa a consulta SQL e retorna as categorias encontradas
    const [resp] = await con.query(comando);
    return resp;
}


export async function alterarImagem(imagem, id) {
    const comando = `
        UPDATE TB_PRODUTO
        SET IMG_PRODUTO = ?
        WHERE ID_INSTRUMENTOS = ?
            `

    const [resp] = await con.query(comando, [imagem, id]);
    return resp.affectedRows;
}


// Função para deletar um produto por ID
export async function DeletarProduto(id) {
    // Define o comando SQL para deletar um produto com base no ID de instrumentos
    const comando = `
        
        DELETE FROM TB_PRODUTO
        WHERE ID_INSTRUMENTOS = ?
        `;

    // Executa a consulta SQL com o ID fornecido e retorna o número de linhas afetadas
    const [resp] = await con.query(comando, [id]);
    return resp.affectedRows;
}

// Função para alterar informações de um produto por ID
export async function AlterarProduto(produto, id) {
    // Define o comando SQL para atualizar informações de um produto com base no ID de instrumentos
    const comando = `
        UPDATE TB_PRODUTO
    SET
    ID_MARCAS = ?,
        ID_CATEGORIA = ?,
        NM_PRODUTO = ?,
        NR_PRECO = ?,
        NR_PRECO_PROMOCIONAL = ?,
        BT_DESTAQUE = ?,
        BT_PROMOCAO = ?,
        BT_DISPONIVEL = ?,
        QTD_ESTOQUE = ?,
        DS_DETALHES = ?
            WHERE ID_INSTRUMENTOS = ?
                `;

    // Executa a consulta SQL com os parâmetros fornecidos
    const [resp] = await con.query(comando, [
        produto.MARCAS,
        produto.CATEGORIA,
        produto.PRODUTO,
        produto.PRECO,
        produto.PRECO_PROMOCIONAL,
        produto.DESTAQUE,
        produto.PROMOCAO,
        produto.DISPONIVEL,
        produto.ESTOQUE,
        produto.DETALHE,
        id
    ]);

    // Retorna o número de linhas afetadas pela atualização
    return resp.affectedRows;
}

export async function AddCarrinho(carrinho) {
    const comando = `
        INSERT INTO TB_CARRINHO (ID_USER, ID_INSTRUMENTOS)
                        VALUES  (?, ?)
    `

    const [resp] = await con.query(comando, [carrinho.User, carrinho.ID])

    carrinho.id = resp.insertId;
    return carrinho

};

// Função para inserir um novo produto
export async function inserirProduto(produto) {
    // Define o comando SQL para inserir um novo produto
    const comando = `
        INSERT INTO TB_PRODUTO(ID_MARCAS, ID_CATEGORIA, NM_PRODUTO, NR_PRECO, NR_PRECO_PROMOCIONAL, BT_DESTAQUE, BT_PROMOCAO, BT_DISPONIVEL, QTD_ESTOQUE, DS_DETALHES)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    // Executa a consulta SQL com os parâmetros fornecidos
    const [resp] = await con.query(comando, [
        produto.MARCAS,
        produto.CATEGORIA,
        produto.PRODUTO,
        produto.PRECO,
        produto.PRECO_PROMOCIONAL,
        produto.DESTAQUE,
        produto.PROMOCAO,
        produto.DISPONIVEL,
        produto.ESTOQUE,
        produto.DETALHE
    ]);

    // Define o ID do produto recém-inserido no objeto "produto"
    produto.id = resp.insertId;

    // Retorna o objeto "produto" com o ID definido
    return produto;
}



// Função para exibir todos os produtos
export async function ExibirTodosProdutos() {
    // Define o comando SQL para selecionar todos os produtos
    const comando = `
    SELECT
            ID_INSTRUMENTOS AS ID,
        ID_MARCAS AS MARCAS,
            ID_CATEGORIA AS CATEGORIAS,
                NM_PRODUTO AS PRODUTO,
                    NR_PRECO AS PRECO,
                        NR_PRECO_PROMOCIONAL AS PRECOPROMO,
                            BT_DESTAQUE AS DESTAQUE,
                                BT_PROMOCAO AS PROMODISP,
                                    BT_DISPONIVEL AS DISPONIVEL,
                                        QTD_ESTOQUE AS ESTOQUE,
                                            DS_DETALHES AS DETALHE,
                                                IMG_PRODUTO AS IMAGEM
        FROM TB_PRODUTO
        `;

    // Executa a consulta SQL e retorna os produtos encontrados
    let [resp] = await con.query(comando);
    return resp;
}

// Função para exibir produtos filtrados por nome
export async function ExibirTodosFiltroNome(nome) {
    // Define o comando SQL para selecionar produtos que contenham o nome especificado
    const comando = `
    SELECT
            ID_INSTRUMENTOS AS ID,
        ID_MARCAS AS MARCAS,
            ID_CATEGORIA AS CATEGORIAS,
                NM_PRODUTO AS PRODUTO,
                    NR_PRECO AS PRECO,
                        NR_PRECO_PROMOCIONAL AS PRECOPROMO,
                            BT_DESTAQUE AS DESTAQUE,
                                BT_PROMOCAO AS PROMODISP,
                                    BT_DISPONIVEL AS DISPONIVEL,
                                        QTD_ESTOQUE AS ESTOQUE,
                                            DS_DETALHES AS DETALHE,
                                                IMG_PRODUTO AS IMAGEM
        FROM TB_PRODUTO
        WHERE NM_PRODUTO LIKE ?
        `;

    // Executa a consulta SQL com o nome especificado (usando coringas % para pesquisa parcial) e retorna os produtos encontrados
    let [resp] = await con.query(comando, [`% ${ nome }% `]);
    return resp;
}
