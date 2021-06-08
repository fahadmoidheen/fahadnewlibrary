const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.ojr6b.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority')
const Schema =mongoose.Schema

const AuthorSchema =new Schema({
    author:String,
    language:String,
    genre:String,
    image:String
});
 var Authordata =mongoose.model('Authordata',AuthorSchema);
 module.exports=Authordata;