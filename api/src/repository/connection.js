import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD

});
console.log('BD conectado com sucesso!');
export {con}