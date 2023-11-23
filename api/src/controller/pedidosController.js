import { Router } from "express";
import { AdicionarPedido, AlterarStatusPedido, MostrarPedidoUsuario, MostrarPedidosPorIdUsuario, MostrarPedidosUsuarios } from "../repository/pedidosRepository.js";


const server = Router();

server.put('/pedido/status/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const pedido = req.body;

        const resposta = await AlterarStatusPedido(pedido, id);

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

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

server.get('/pedido/admin', async (req, resp) => {
    try {
        const resposta = await MostrarPedidosUsuarios()
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/pedido/usuario/:id', async (req, resp) => {
    try {

        const { id } = req.params

        const resposta = await MostrarPedidoUsuario(id)
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.get('/pedidos/usuario/:id', async (req, resp) => {
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