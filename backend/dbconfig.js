const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/HotelApp')
.then((x)=>{
    console.log(`Connected to Mongo Database:"${x.connections[0].name}"`)
  })
  .catch((err)=>{
    console.log("Connection Error",err)
})
 
module.exports = mongoose
