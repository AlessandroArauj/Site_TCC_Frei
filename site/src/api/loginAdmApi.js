import axios from "axios";
import { URL_API } from "../constant";


const api = axios.create({
    baseURL: URL_API
})


export async function loginAdm(email, senha){
    const r = await api.post('/cliente/login/adm', {
        email: email,
        senha: senha

      }); 

      console.log(r.data);
      return r.data

};
