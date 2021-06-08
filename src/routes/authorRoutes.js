const express =require ('express');
const authorRouter = express.Router();
const Authordata =require('../model/Authordata')
const multer=require('multer');
const path=require('path');

var morgan = require("morgan")

authorRouter.use(express.urlencoded({extended:true}))
authorRouter.use(morgan('dev'))

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

function authorRout(nav) {
    authorRouter.get("/",function (req,res) {
        Authordata.find()
        .then(function (authors) {
            res.render("authors",
        {
            nav,
            title :'Library',
            authors
        })
        })
        
    })
    //Single book
    authorRouter.get("/:id",function (req,res) {
       const id= req.params.id
       Authordata.findOne({_id:id})
        .then(function (author) {
            res.render("author",
        {
            nav,
            title :'Library',
            author
        })
        })
        
    })
    //Delete author
    
    authorRouter.get('/delete/:id',function (req,res) {
        const id=req.params.id;
        Authordata.remove({_id : id})
        .then(function(){
            res.redirect('/authors')
        })
    })

    //update author

    authorRouter.get('/editauthor/:id',function (req,res) {
        const id=req.params.id;
        Authordata.findOne({_id : id})
        .then(function(author){
            res.render('editauthor',{
                nav,
                title :'New Library',
                author
            })
            console.log(author)
        })
        console.log(req.params.id);
    })
    authorRouter.post('/updateauthor/:id',upload,(req, res) => {
        const id=req.params.id;
        var item={
            author:req.body.author,
            language:req.body.language,
            genre:req.body.genre,
            image:req.file.filename
        }
        Authordata.updateOne({_id:id},{$set:item})
        .then(function(){
            res.redirect('/authors')
        })
    })
    return authorRouter;
}

module.exports=authorRout;