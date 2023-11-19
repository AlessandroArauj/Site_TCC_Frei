import { Router } from "express";
import { AdicionarPedido, MostrarPedidosPorIdUsuario } from "../repository/pedidosRepository.js";


const server = Router();

server.post('/pedido', async (req, resp) => {
    try {
        const pedidos = req.body;
        const resposta = await AdicionarPedido(pedidos);

        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

server.get('/pedido/usuario/:id', async (req, resp) => {
    try {

        const { id } = req.params
        const resposta = await MostrarPedidosPorIdUsuario(id)
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


















export default server;