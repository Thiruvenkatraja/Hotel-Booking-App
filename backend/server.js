const express = require('express');
const app = express();
const port=process.env.port||5000;
const mongoose=require('mongoose')
const roomRouter=require('./routes/roomRoutes');
const cors =require('cors')

require('./dbconfig')
app.use(express.json())
app.use(cors())
app.use('/api/rooms', roomRouter)

app.listen(port,()=>console.log(`Sever is running on ${port}`));
