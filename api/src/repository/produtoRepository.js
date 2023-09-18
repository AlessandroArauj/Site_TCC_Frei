import { con } from "./connection.js";

export async function DeletarProduto(id){
    const comando = `
        DELETE FROM TB_PRODUTO
            WHERE   ID_INSTRUMENTOS = ?
    
    `

    const [resp] = await con.query(comando, [id]);
    return resp.affectedRows;

}

export async function AlterarProduto(produto, id){
    const comando = `
        UPDATE TB_PRODUTO
        SET
            ID_MARCAS               = ?,
            ID_CATEGORIA            = ?,
            NM_PRODUTO              = ?,
            VL_PRECO                = ?,
            VL_PRECO_PROMOCIONAL    = ?,
            BT_DESTAQUE             = ?,
            BT_PROMOCAO             = ?,
            BT_DISPONIVEL           = ?,
            QTD_ESTOQUE             = ?,
            DS_DETALHES             = ?
        WHERE ID_INSTRUMENTOS = ?
    `

    const [ resp ] = await con.query(comando, [
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

export async function inserirProduto (produto){
    const comando = `
    INSERT INTO TB_PRODUTO (ID_MARCAS, ID_CATEGORIA, NM_PRODUTO, VL_PRECO, VL_PRECO_PROMOCIONAL, BT_DESTAQUE, BT_PROMOCAO, BT_DISPONIVEL, QTD_ESTOQUE, DS_DETALHES) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    
    `

    const [ resp ] = await con.query(comando,
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


export async function AlterarImagem(imagem, id){
    const comando = `
        UPDATE TB_PRODUTO
            SET IMG_IMAGEM              = ?
        WHERE ID_INSTRUMENTOS           = ?
    
    `
    const [resp] = await con.query(comando, [imagem, id]);
    return resp.affectedRows;

}


export async function ExibirTodosProdutos(){
    const comando = `

    select  ID_MARCAS               AS MARCAS,
            ID_CATEGORIA            AS CATEGORIAS,
            NM_PRODUTO              AS PRODUTO,
            VL_PRECO                AS PRECO,
            VL_PRECO_PROMOCIONAL    AS PRECOPROMO,
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