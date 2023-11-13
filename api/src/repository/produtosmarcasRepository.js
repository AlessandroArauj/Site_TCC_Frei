// Importa a conexão do arquivo "connection.js"
import { con } from './connection.js';



// Função para buscar uma marca por seu ID no banco de dados
export async function buscarMarcasPorId(id) {
    // Define o comando SQL de seleção
    let comando = `
        SELECT * FROM TB_MARCAS WHERE ID_MARCAS = ?
    `;

    // Executa a consulta SQL com o ID fornecido e aguarda a resposta
    let [resp] = await con.query(comando, [id]);

    // Retorna o resultado da consulta, que deve conter as informações da marca
    return resp;
}

// Função para listar todas as marcas no banco de dados
export async function listarMarcas() {
    // Define o comando SQL de seleção para listar todas as marcas
    let comando = `
        SELECT ID_MARCAS id, NM_MARCA marca FROM TB_MARCAS
    `;

    // Executa a consulta SQL e aguarda a resposta
    let [resp] = await con.query(comando);

    // Retorna o resultado da consulta, que deve conter uma lista de marcas com seus IDs e nomes
    return resp;
}
