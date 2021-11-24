const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
email: {
    type:String,
    required:true,
    unique:true
},
password:{
    type:String
},
nickname:{
    type:String
},
sex:{
    type:String

},
want_region:{
    type:String
},
want_vol:{
    typre:String
},
age:{
    type:String
}},
{timestamps:{createdAt: 'created_at',updatedAt: 'updated_at'}})

const User = mongoose.model('User', userSchema);
 
module.exports = User