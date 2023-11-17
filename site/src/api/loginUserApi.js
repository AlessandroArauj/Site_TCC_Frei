import axios from "axios";
import { URL_API } from "../constant";


const api = axios.create({
    baseURL: URL_API
})

export async function EditarUsuario(usuario, nasci, celular, endereco, email, id) {
    const resposta = await api.put(`/cliente/editar/${id}`, {
        Nome: usuario,
        Nasc: nasci,
        Telefone: celular,
        endereco: endereco,
        email: email
    })
    console.log(resposta.data);
    return resposta.data;
}

export async function ListarComentarios(id) {
    const r = await api.get(`/cliente/comentarios/${id}`)
    return r.data
}

export async function AddComentario(IDUser, IDInstrumento, Comentario) {
    const r = await api.post('/cliente/comentarios', {
        IDUser: IDUser,
        IDInstrumento: IDInstrumento,
        Comentario: Comentario
    })

    return r.data;
}

export async function BuscarCartaoPorID(id) {
    const resposta = await api.get(`/cliente/cartoes/${id}`)
    return resposta.data
}

export async function addCartao(idUser, titular, cvv, validade, cpf, numero) {
    const r = await api.post('/cliente/cartao', {
        IdUser: idUser,
        TITULAR: titular,
        CVV: cvv,
        VALIDADE: validade,
        CPF: cpf,
        NUMERO: numero
    })

    
}

export async function login(email, senha){
    const r = await api.post('/cliente/login', {
        EMAIL: email,
        SENHA: senha

      }); 

      console.log(r.data);
      return r.data

};


export async function CadastroUsuarioReact(nome, data, tele, cpf, endereco, cidade, email, senha) {
    const resposta = await api.post('/cliente', {

        NOME: nome,
        DATA: data,
        TELEFONE: tele,
        CPF: cpf,
        ENDERECO: endereco,
        CIDADE: cidade,
        EMAIL: email,
        SENHA: senha

    })

}