const express = require('express');
const app = express();
const logger = require('./middleware/logger')

app.use(logger);
app.use(express.json());

const ueserroutes = require('./routes/userroutes');
const productroutes = require('./routes/productroutes');

app.use('/api/users',ueserroutes);
app.use('/api/products',productroutes);

const PORT = 5200;
app.listen(PORT,()=>console.log('server is running port 5200'))