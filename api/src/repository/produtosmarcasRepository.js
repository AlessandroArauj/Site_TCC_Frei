import { con } from './connection.js'

export async function buscarMarcasPorId(id) {

    let comando = `
        select * from TB_MARCAS where ID_MARCAS = ?
    
    `
    let [resp] = await con.query(comando, [id]);
    return resp

};

export async function listarMarcas(){
    let comando = `
        select ID_MARCAS    id,
               NM_MARCA     marca
        FROM TB_MARCAS

    `

    let [resp] = await con.query(comando);
    return resp;
}