import { con } from "./connection.js";

export async function listarCategorias(){
    const comando = `
        select NM_CATEGORIA     as Categoria,
               ID_CATEGORIA     as Id

        from TB_CATEGORIA
    `
    const [resp] = await con.query(comando);
    return resp
}

export async function AdicionarImagens(imagem, id){
    const comando = `
        INSERT INTO TB_PRODUTO_IMAGEM (ID_INSTRUMENTOS, IMG_PRODUTO)
                    VALUES            (?, ?)
    `

    const [ resp ] = await con.query(comando, [id, imagem]);

    return resp.affectedRows;
}


export async function DeletarProduto(id) {
    const comando = `
        DELETE FROM TB_PRODUTO
            WHERE   ID_INSTRUMENTOS = ?
    
    `

    const [resp] = await con.query(comando, [id]);
    return resp.affectedRows;

}

export async function AlterarProduto(produto, id) {
    const comando = `
        UPDATE TB_PRODUTO
        SET
            ID_MARCAS               = ?,
            ID_CATEGORIA            = ?,
            NM_PRODUTO              = ?,
            DS_PRECO                = ?,
            DS_PRECO_PROMOCIONAL    = ?,
            BT_DESTAQUE             = ?,
            BT_PROMOCAO             = ?,
            BT_DISPONIVEL           = ?,
            QTD_ESTOQUE             = ?,
            DS_DETALHES             = ?
        WHERE ID_INSTRUMENTOS = ?
    `

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
    ])

    return resp.affectedRows;
}

export async function inserirProduto(produto) {
    const comando = `
    INSERT INTO TB_PRODUTO (ID_MARCAS, ID_CATEGORIA, NM_PRODUTO, DS_PRECO, DS_PRECO_PROMOCIONAL, BT_DESTAQUE, BT_PROMOCAO, BT_DISPONIVEL, QTD_ESTOQUE, DS_DETALHES) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    
    `

    const [resp] = await con.query(comando,
        [

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


    return resp


}


export async function AlterarImagem(imagem, id) {
    const comando = `
        INSERT INTO TB_PRODUTO_IMAGEM (IMG_PRODUTO)
            values( ? )
    
    `
    const [resp] = await con.query(comando, [
        imagem.imagem, 
        id
    ]);
    return resp;

}


export async function ExibirTodosProdutos() {
    const comando = `

    select  ID_MARCAS               AS MARCAS,
            ID_CATEGORIA            AS CATEGORIAS,
            NM_PRODUTO              AS PRODUTO,
            DS_PRECO                AS PRECO,
            DS_PRECO_PROMOCIONAL    AS PRECOPROMO,
            BT_DESTAQUE             AS DESTAQUE,
            BT_PROMOCAO             AS PROMODISP,
            BT_DISPONIVEL           AS DISPONIVEL,
            QTD_ESTOQUE             AS ESTOQUE,
            DS_DETALHES             AS DETALHE

    from    TB_PRODUTO
    
    
    `

    let [resp] = await con.query(comando)
    return resp;

}

export async function ExibirTodosFiltroNome(nome) {
    const comando = `

    select  ID_MARCAS               AS MARCAS,
            ID_CATEGORIA            AS CATEGORIAS,
            NM_PRODUTO              AS PRODUTO,
            DS_DETALHES             AS DETALHE

    from    TB_PRODUTO
    where NM_PRODUTO LIKE ?
    
    
    `

    let [resp] = await con.query(comando, ['%' + nome + '%'])
    return resp;

}