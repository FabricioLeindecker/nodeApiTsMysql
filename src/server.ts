import dotenv from 'dotenv';
dotenv.config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3333;

app.get('/', (request: any, response: any) => {
    response.send('Bem-vindo!')
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})