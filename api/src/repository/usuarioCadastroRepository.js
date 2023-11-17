// Importa a conexão do arquivo "connection.js"
import { con } from "./connection.js";

// Função para editar informações de um usuário no banco de dados


export async function EditarDados(usuario, id) {
    const comando = `
        UPDATE TB_CADASTRO_USER
            SET NM_NOME_COMP = ?,
                DT_NASC = ?,
                DS_TELEFONE = ?,
                DS_CPF = ?,
                DS_ENDEREÇO = ?,
                DS_EMAIL = ?
            WHERE ID_USER = ?


    `

    const [resp]= await con.query(comando, [
        usuario.Nome,
        usuario.Nasc,
        usuario.Telefone,
        usuario.cpf,
        usuario.endereco,
        usuario.email,
        id
    ]);

    return resp.affectedRows
}

export async function BuscarComentarioProduto(id) {
    const comando = `
        SELECT
            NM_NOME_COMP        AS Usuario,
            DS_COMENTARIO       AS Comentario
        FROM TB_AVALIACAO       AS A
        

        INNER JOIN 
            TB_CADASTRO_USER AS C ON A.ID_USER = C.ID_USER

            WHERE ID_INSTRUMENTOS = ?

    `

    const [resp] = await con.query(comando, [id])
    return resp;
}

export async function CadastrarComentario(comentario) {
    const comando = `
        INSERT INTO TB_AVALIACAO(ID_USER, ID_INSTRUMENTOS, DS_COMENTARIO)
                VALUES(?, ?, ?)
    `
    const [resp] = await con.query(comando, [
    comentario.IDUser,
    comentario.IDInstrumento,
    comentario.Comentario
    ]);

    comentario.id = resp.insertId
    return comando;
}

// Função para cadastrar um novo usuário no banco de dados
export async function CadastrarUsuario(usuario) {
    // Define o comando SQL de inserção
    const comando = `
        INSERT INTO TB_CADASTRO_USER(NM_NOME_COMP, DT_NASC, DS_TELEFONE, DS_CPF, DS_ENDEREÇO, DS_CIDADE, DS_EMAIL, ds_SENHA)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Executa a consulta SQL com os parâmetros fornecidos e aguarda a resposta
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

    // Define o ID do usuário recém-cadastrado no objeto "usuario"
    usuario.id = resp.insertId;

    // Retorna o objeto "usuario" com o ID definido
    return usuario;
}

// Função para excluir um usuário do banco de dados
export async function ExcluirUsuario(id) {
    // Define o comando SQL de exclusão
    const comando = `
        DELETE FROM TB_CADASTRO_USER
        WHERE ID_USER = ?
    `;

    // Executa a consulta SQL com o ID do usuário a ser excluído
    const [resp] = await con.query(comando, [id]);

    // Retorna o número de linhas afetadas pela exclusão
    return resp.affectedRows;
}


export async function MapearCartaoPorID(id) {
    const comando = `
        SELECT
            ID_CARTOES      AS ID,
            ID_USER         AS UsuarioID,
            NM_TITULAR      AS Titular,
            NR_CARTAO       AS NumeroDoCartao
        
        from TB_CARTOES

        WHERE ID_USER = ?
    `
    const [resp] = await con.query(comando, [id])
    return resp;
}


export async function AddCartao(cartao) {
    const comando = `
        INSERT INTO TB_CARTOES(ID_USER, NM_TITULAR, DS_CVV, DS_VAL, DS_CPF, NR_CARTAO)
                    values (?, ?, ?, ?, ?, ?)

        
    `

    const [resp] = await con.query(comando, [
        
        cartao.IdUser,
        cartao.TITULAR,
        cartao.CARTAO,
        cartao.CVV,
        cartao.VALIDADE,
        cartao.CPF,
        cartao.NUMERO
    
    ])

    cartao.id = resp.insertId
    return cartao

}


// Função para fazer login de um usuário com base no email e senha
export async function LoginUsuario(email, senha) {
    // Define o comando SQL de seleção para verificar as credenciais do usuário
    const comando = `
        SELECT
            ID_USER         AS "id",
            NM_NOME_COMP    AS "nome",
            DS_EMAIL        AS "email",
            ds_SENHA        AS "senha",
            DT_NASC         AS "Nascimento",
            DS_ENDEREÇO     AS "Endereço",
            DS_TELEFONE     AS "Celular"

        FROM TB_CADASTRO_USER
        WHERE DS_EMAIL = ? AND ds_SENHA = ?
    `;

    // Executa a consulta SQL com o email e senha fornecidos
    const resp = await con.query(comando, [email, senha]);

    // Obtém as linhas do resultado da consulta
    const linhas = resp[0];
    // Pega a primeira linha (supondo que o email é único no banco de dados)
    const linha = linhas[0];

    // Retorna as informações do usuário logado
    return linha;
}

// Função para fazer login de um administrador com base no email e senha
export async function LoginAdmin(email, senha) {
    // Define o comando SQL de seleção para verificar as credenciais do administrador
    const comando = `
        SELECT
            ID_ADM AS "id",
            NM_NOME_COMP AS "nome",
            DS_EMAIL AS "email",
            DS_SENHA AS "senha"
        FROM TB_CADASTRO_ADM
        WHERE DS_EMAIL = ? AND DS_SENHA = ?
    `;

    // Executa a consulta SQL com o email e senha fornecidos
    const resp = await con.query(comando, [email, senha]);

    // Obtém as linhas do resultado da consulta
    const linhas = resp[0];
    // Pega a primeira linha (supondo que o email é único no banco de dados)
    const linha = linhas[0];

    // Retorna as informações do administrador logado
    return linha;
}
