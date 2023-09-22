import { con } from "./connection.js";

export async function CadastrarUsuario(usuario){
    const comando = `
        INSERT INTO TB_CADASTRO_USER( NM_NOME_COMP, DT_NASC, DS_TELEFONE, DS_CPF, DS_ENDEREÇO, DS_CIDADE, DS_EMAIL, ds_SENHA )
                values(?, ?, ?, ?, ?, ?, ?, ?)

    `
    const [resp] = await con.query(comando, [

        usuario.NOME,
        usuario.DATA,
        usuario.TELEFONE,
        usuario.CPF,
        usuario.ENDERECO,
        usuario.CIDADE,
        usuario.EMAIL,
        usuario.SENHA


    ]);

    return resp;

}