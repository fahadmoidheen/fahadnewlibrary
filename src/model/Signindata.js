const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.ojr6b.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema =mongoose.Schema;

const SignSchema =new Schema({
    fname:String,
    lname:String,
    phonenumber:Number,
    Email:String,
    password:String,
    confirmpassword:String
});
const Signindata= mongoose.model('signindata',SignSchema);
module.exports=Signindata;

