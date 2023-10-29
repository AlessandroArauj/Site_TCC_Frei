// Importa a conexão do arquivo "connection.js"
import { con } from "./connection.js";

// Função para editar informações de um usuário no banco de dados
export async function EditarUsuario(usuario, id) {
    // Define o comando SQL de atualização
    const comando = `
        UPDATE TB_CADASTRO_USER
        SET
            NM_NOME_COMP = ?,
            DT_NASC = ?,
            DS_TELEFONE = ?,
            DS_CPF = ?,
            DS_ENDEREÇO = ?,
            DS_CIDADE = ?,
            DS_EMAIL = ?,
            ds_SENHA = ?
        WHERE ID_USER = ?
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
        usuario.SENHA,
        id
    ]);

    // Retorna o número de linhas afetadas pela atualização
    return resp.affectedRows;
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

// Função para fazer login de um usuário com base no email e senha
export async function LoginUsuario(email, senha) {
    // Define o comando SQL de seleção para verificar as credenciais do usuário
    const comando = `
        SELECT
            ID_USER AS "id",
            NM_NOME_COMP AS "nome",
            DS_EMAIL AS "email",
            ds_SENHA AS "senha"
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
