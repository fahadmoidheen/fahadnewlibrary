const express =require ('express');
const addbookRouter = express.Router();
const Bookdata =require('../model/Bookdata')
const multer=require('multer');
const path=require('path');

var morgan = require("morgan")

addbookRouter.use(express.urlencoded({extended:true}))
addbookRouter.use(morgan('dev'))

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/Images',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

// Init Upload
const upload = multer({
    storage: storage
}).single("image");

function addbookroute(nav) {
    addbookRouter.get('/',function (req,res) {
        res.render('addbooks',
        {
            nav,
            title :'Library'
        })
    })
    addbookRouter.post('/add',function (req,res) {   
        upload(req,res,(err)=>{
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
        }
     var book=Bookdata(item);
     book.save();
     res.redirect('/books')
    
    })
})
    return addbookRouter
}
module.exports=addbookroute