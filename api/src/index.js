import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { con } from './repository/connection.js';

const serve = express();
serve.use(cors());
serve.use(express.json());


serve.listen(process.env.PORT,
    () => console.log(`API aberta na PORTA ${process.env.PORT} Bem-Vindo`));


    serve.get('/ping', (req, resp) =>{
        resp.send('pong')
    
    })