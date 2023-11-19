import axios from "axios";
import { URL_API } from "../constant";


const api = axios.create({
    baseURL: URL_API
})


export async function PedidoAdd(IDuser, IDproduto) {
    const r = await api.post('/pedido', {
        IdUser: IDuser,
        IDInstrumentso: IDproduto
    });

    return r.data
}