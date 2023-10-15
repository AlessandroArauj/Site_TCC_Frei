import { con } from "./connection.js";

export async function EditarUsuario(usuario, id) {
    const comando = `
        UPDATE TB_CADASTRO_USER
        SET
            NM_NOME_COMP            =?,
            DT_NASC                 =?,
            DS_TELEFONE             =?,
            DS_CPF                  =?,
            DS_ENDEREÇO             =?,
            DS_CIDADE               =?,
            DS_EMAIL                =?,
            ds_SENHA                =?

        WHERE ID_USER               =?
    
    `

    const [resp] = await con.query(comando, [

        usuario.NOME,
        usuario.DATA,
        usuario.TELEFONE,
        usuario.CPF,
        usuario.ENDERECO,
        usuario.CIDADE,
        usuario.EMAIL,
        usuario.SENHA,
        id

    ])

    return resp.affectedRows;
}

export async function CadastrarUsuario(usuario) {
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

    usuario.id = resp.insertId

    return resp;

}

export async function ExcluirUsuario(id) {
    const comando = `
        DELETE FROM TB_CADASTRO_USER
        WHERE       ID_USER = ?

    `;


    const [resp] = await con.query(comando, [id]);
    return resp.affectedRows

}

export async function LoginUsuario(email, senha) {
    const comando = `SELECT
                        ID_USER         AS "id",
                        NM_NOME_COMP    AS "nome",
                        DS_EMAIL        AS "email",
                        ds_SENHA        AS "senha"
                     FROM TB_CADASTRO_USER
                    WHERE DS_EMAIL = ? AND ds_SENHA = ?
`

    const resp = await con.query(comando, [email, senha]);

    const linhas = resp[0];
    const linha = linhas[0];



    return linha;
}