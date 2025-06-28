const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
connectdb();
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoutes);
const PORT = process.env.PORT || 4700;

app.listen(PORT, ()=>{
    console.log("server is running port 4700");
});