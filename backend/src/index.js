const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parametro
 * 
 * Querry Params: Parametros nomeados enviados na rota apos "?" (filtros, paginação)
 * Routes Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recurso
 */


app.listen(3333);