import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import produtoController from './controller/produtoController.js';
import usuarioCadastroController from './controller/usuarioCadastroController.js'


const server = express();
server.use(cors());
server.use(express.json());
server.use(produtoController);
server.use(usuarioCadastroController)

server.use('/storage/fotosProdutos', express.static('storage/fotosProdutos'))



server.listen(process.env.PORT,
    () => console.log(`API aberta na PORTA ${process.env.PORT} Bem-Vindo`));


    server.get('/ping', (req, resp) =>{
        resp.send('pong')
    
    })