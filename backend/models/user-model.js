const mongoose = requiere ('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password1:{
        type:String,
        required:true
    },
    password2:{
        type:String,
        required:true
    }
})