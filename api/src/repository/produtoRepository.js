// Importa a conexão do arquivo "connection.js"
import { con } from "./connection.js";

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
            DS_DETALHES AS DETALHE
        FROM TB_PRODUTO

        WHERE BT_DESTAQUE = 1 AND BT_DISPONIVEL = 1;
    `
    const [resp] = await con.query(comando)
    return resp;

}


// Função para listar todas as imagens de produtos no banco de dados
export async function ListarTodasImagens() {
    // Define o comando SQL para selecionar todas as imagens de produtos
    const comando = `
        SELECT IMG_PRODUTO AS Imagem
        FROM TB_PRODUTO_IMAGEM
    `;

    // Executa a consulta SQL e retorna as imagens encontradas
    const [resp] = await con.query(comando);
    return resp;
}

// Função para listar imagens de produtos por ID de instrumentos
export async function ListarImagemPorIDinstrumentos(id) {
    // Define o comando SQL para selecionar imagens de produtos com base no ID de instrumentos
    const comando = `
        SELECT IMG_PRODUTO AS IMAGEM
        FROM TB_PRODUTO_IMAGEM
        WHERE ID_INSTRUMENTOS = ?
    `;

    // Executa a consulta SQL com o ID fornecido e retorna as imagens encontradas
    const [resp] = await con.query(comando, [id]);
    return resp;
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

// Função para adicionar imagens de produtos
export async function AdicionarImagens(imagem, id) {
    // Define o comando SQL para inserir uma imagem de produto com base no ID de instrumentos
    const comando = `
        INSERT INTO TB_PRODUTO_IMAGEM (ID_INSTRUMENTOS, IMG_PRODUTO)
        VALUES (?, ?)
    `;

    // Executa a consulta SQL com o ID e a imagem fornecidos
    const [resp] = await con.query(comando, [id, imagem]);

    // Retorna o número de linhas afetadas pela inserção
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

// Função para inserir um novo produto
export async function inserirProduto(produto) {
    // Define o comando SQL para inserir um novo produto
    const comando = `
        INSERT INTO TB_PRODUTO (ID_MARCAS, ID_CATEGORIA, NM_PRODUTO, NR_PRECO, NR_PRECO_PROMOCIONAL, BT_DESTAQUE, BT_PROMOCAO, BT_DISPONIVEL, QTD_ESTOQUE, DS_DETALHES)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
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

// Função para alterar uma imagem
export async function AlterarImagem(imagem, id) {
    // Define o comando SQL para inserir uma imagem
    const comando = `
        INSERT INTO TB_PRODUTO_IMAGEM (IMG_PRODUTO)
        VALUES (?)
    `;

    // Executa a consulta SQL com a imagem e o ID fornecidos
    const [resp] = await con.query(comando, [imagem.imagem, id]);
    return resp;
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
            DS_DETALHES AS DETALHE
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
            DS_DETALHES AS DETALHE
        FROM TB_PRODUTO
        WHERE NM_PRODUTO LIKE ?
    `;

    // Executa a consulta SQL com o nome especificado (usando coringas % para pesquisa parcial) e retorna os produtos encontrados
    let [resp] = await con.query(comando, [`%${nome}%`]);
    return resp;
}
