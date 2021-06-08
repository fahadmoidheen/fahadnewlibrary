const express =require ('express');
const addauthorRouter = express.Router();
const Authordata =require('../model/Authordata')
const multer=require('multer');
const path=require('path');

var morgan = require("morgan")

addauthorRouter.use(express.urlencoded({extended:true}))
addauthorRouter.use(morgan('dev'))

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

function addauthorroute(nav) {
    addauthorRouter.get('/',function (req,res) {
        res.render('addauthor',
        {
            nav,
            title :'Library'
        })
    })
    addauthorRouter.post('/add',upload,function (req,res) {
        var item={
            author:req.body.author,
           language:req.body.language,
           genre:req.body.genre,
           image:req.file.filename
        }
     var author=Authordata(item);
     author.save();
     res.redirect('/authors')   
    })
    return addauthorRouter
}
module.exports=addauthorroute