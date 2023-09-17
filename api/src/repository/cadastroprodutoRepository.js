import { con } from "./connection.js";

export async function inserirProduto (produto, id){
    `
    INSERT INTO TB_PRODUTO (ID_MARCAS, ID_CATEGORIA, NM_PRODUTO, VL_PRECO, VL_PRECO_PROMOCIONAL, BT_DESTAQUE, BT_PROMOCAO, BT_DISPONIVEL, QTD_ESTOQUE, DS_DETALHES) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    
    `


}