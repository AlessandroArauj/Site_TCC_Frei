import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

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