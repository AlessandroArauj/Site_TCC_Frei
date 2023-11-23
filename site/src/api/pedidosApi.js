import axios from "axios";
import { URL_API } from "../constant";


const api = axios.create({
    baseURL: URL_API
})

export async function StatusAlterar(status, id) {
    const r = await api.put(`/pedido/status/${id}`, {
        IdStatus: status
    })
    return r.data
}


export async function PedidoAdd(IDuser, produtoId) {
    const r = await api.post('/pedido', {
        IdUser: IDuser,
        IDInstrumentos: produtoId
    });

    return r.data
}

export async function MostrarPedidos() {
    const resposta = await api.get('/pedido/admin')
    return resposta.data

}


export async function MostrarPedidosUsuario(id) {
    const resposta = await api.get(`/pedidos/usuario/${id}`)
    return resposta.data;
}