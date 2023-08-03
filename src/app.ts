const express = require('express');

import clientsRouter from './routes/clientRouter';
import productsRouter from './routes/productsRouter';
import cartRouter from './routes/cartRouter';

const app = express();

app.use(express.json());

app.use('/api', clientsRouter);
app.use('/api', productsRouter);
app.use('/api', cartRouter);

export default app;
