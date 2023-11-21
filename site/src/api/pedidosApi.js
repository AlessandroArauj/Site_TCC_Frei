import axios from "axios";
import { URL_API } from "../constant";


const api = axios.create({
    baseURL: URL_API
})


export async function PedidoAdd(IDuser, produtoId) {
    const r = await api.post('/pedido', {
        IdUser: IDuser,
        IDInstrumentos: produtoId
    });

    return r.data
}


export async function MostrarPedidosUsuario(id) {
    const resposta = await api.get(`/pedido/usuario/${id}`)
    return resposta.data;
}