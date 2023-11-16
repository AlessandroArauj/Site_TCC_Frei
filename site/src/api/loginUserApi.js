import axios from "axios";
import { URL_API } from "../constant";


const api = axios.create({
    baseURL: URL_API
})

export async function addCartap(IdUser, titular, cvv, validade, cpf, numero) {
    const r = await api.post('/cliente/cartao', {
        IdUser: IdUser,
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