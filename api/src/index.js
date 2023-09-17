import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import produtoController from './controller/produtoController.js';

import { con } from './repository/connection.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use(produtoController);


server.listen(process.env.PORT,
    () => console.log(`API aberta na PORTA ${process.env.PORT} Bem-Vindo`));


    server.get('/ping', (req, resp) =>{
        resp.send('pong')
    
    })