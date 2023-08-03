const express = require('express');

import clientsRouter from './routes/clientRouter';
import productsRouter from './routes/productsRouter';

const app = express();

app.use(express.json());

app.use('/api', clientsRouter);
app.use('/api', productsRouter);

export default app;
