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