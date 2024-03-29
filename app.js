const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRouter = require('./middlewares/routers/productRouter');
const salesRouter = require('./middlewares/routers/salesRouter');

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima 
// você deve usar o arquivo index.js para executar sua aplicação 
app.use(bodyParser.json());
app.use('/products', productRouter);
app.use('/sales', salesRouter);

module.exports = app;
