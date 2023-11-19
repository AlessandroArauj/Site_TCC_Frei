import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import produtoController from './controller/produtoController.js';
import usuarioCadastroController from './controller/usuarioCadastroController.js'
import pedidosController from './controller/pedidosController.js'


const server = express();
server.use(cors());
server.use(express.json());
server.use(produtoController);
server.use(usuarioCadastroController)
server.use(pedidosController);


server.use('/storage/fotosProdutos', express.static('storage/fotosProdutos'))



server.listen(process.env.MYSQL_PORT,
    () => console.log(`API aberta na PORTA ${process.env.MYSQL_PORT} Bem-Vindo`));


    server.get('/ping', (req, resp) =>{
        resp.send('pong')
    
    })