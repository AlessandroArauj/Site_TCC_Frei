import { con } from './connection.js';

export async function AdicionarPedido(pedidos) {
    const comando = `
        INSERT INTO TB_PEDIDO(ID_USER, ID_INSTRUMENTOS, id_status_pedido, ID_ENDERECO, DT_PEDIDO)
                    VALUES (?, ?, 1, ?, NOW())

    `
    const [resp] = await con.query(comando, [
        pedidos.IdUser,
        pedidos.IDInstrumentos,
        pedidos.Status,
        pedidos.Data
    ]);
    pedidos.id = resp.insertId;
    return pedidos;
};

export async function AlterarStatusPedido (status, id) {
    const comando = `
        UPDATE TB_PEDIDO
        SET
            id_status_pedido = ?
        WHERE ID_PEDIDO = ?
       
    `;

    const [ resp ] = await con.query(comando, [status.IdStatus, id])
    return resp.affectedRows
}   

export async function MostrarPedidosUsuarios() {
    const comando = `
    SELECT
            P.ID_INSTRUMENTOS       AS ID,
            C.ID_USER               AS UserID,
            S.id_status_pedido      AS IDStatus,
            ds_status_pedido        AS Status,
            NM_NOME_COMP            AS Usuario,
            NM_PRODUTO              AS Produto,
            NR_PRECO                AS Preco,
            NR_PRECO_PROMOCIONAL    AS PrecoPromo,
            DT_PEDIDO               AS Data,
            IMG_PRODUTO             AS Imagem
    FROM TB_PEDIDO AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        TB_CADASTRO_USER AS C ON A.ID_USER = C.ID_USER
    INNER JOIN
        TB_PRODUTO AS P ON A.ID_INSTRUMENTOS = P.ID_INSTRUMENTOS

    `

    const [resp] = await con.query(comando);
    return resp;
}


export async function MostrarPedidosPorIdUsuario(id) {
    const comando = `
    SELECT
        P.ID_INSTRUMENTOS       AS ID,
        S.id_status_pedido      AS IDStatus,
        ds_status_pedido        AS Status,
        NM_NOME_COMP            AS Usuario,
        NM_PRODUTO              AS Produto,
        NR_PRECO                AS Preco,
        NR_PRECO_PROMOCIONAL    AS PrecoPromo,
        DT_PEDIDO               AS Data,
        IMG_PRODUTO             AS Imagem
    FROM TB_PEDIDO AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        TB_CADASTRO_USER AS C ON A.ID_USER = C.ID_USER
    INNER JOIN
        TB_PRODUTO AS P ON A.ID_INSTRUMENTOS = P.ID_INSTRUMENTOS
    WHERE A.ID_USER = ?;

    `

    const [resp] = await con.query(comando, [id]);
    return resp;
}


export async function MostrarPedidoUsuario(id) {
    const comando = `
    SELECT
        P.ID_INSTRUMENTOS       AS ID,
        S.id_status_pedido      AS IDStatus,
        ds_status_pedido        AS Status,
        NM_NOME_COMP            AS Usuario,
        NM_PRODUTO              AS Produto,
        NR_PRECO                AS Preco,
        NR_PRECO_PROMOCIONAL    AS PrecoPromo,
        DT_PEDIDO               AS Data,
        IMG_PRODUTO             AS Imagem
    FROM TB_PEDIDO AS A

    INNER JOIN
        tb_status_pedido AS S ON A.id_status_pedido = S.id_status_pedido
    INNER JOIN 
        TB_CADASTRO_USER AS C ON A.ID_USER = C.ID_USER
    INNER JOIN
        TB_PRODUTO AS P ON A.ID_INSTRUMENTOS = P.ID_INSTRUMENTOS
    WHERE ID_PEDIDO = ?;

    `

    const [resp] = await con.query(comando, [id]);
    return resp[0];
}