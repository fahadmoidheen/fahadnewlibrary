const express =require ('express');
const booksRouter = express.Router();
const Bookdata =require('../model/Bookdata')
const multer=require('multer');
const path=require('path');

var morgan = require("morgan")

booksRouter.use(express.urlencoded({extended:true}))
booksRouter.use(morgan('dev'))

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/images',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    
    }
  });

// Init Upload
const upload = multer({
    storage: storage
}).single("image");


function router(nav) {
    booksRouter.get("/",function (req,res) {
        Bookdata.find()
        .then(function (books) {
            res.render("books",
            {
                // role:current_role,
                nav,
                title :'Library',
                books,
                
            })
        })
       
    })
    
    booksRouter.get('/:id',function (req,res) {
        const id =req.params.id
        Bookdata.findOne({_id : id})
        .then(function (book) {
            res.render('book',
            {
                nav,
                title :'Library',
                book
            }) 
        })
        
    })
    //delete book
    booksRouter.get('/delete/:id',function (req,res) {
        const id=req.params.id;
        Bookdata.remove({_id : id})
        .then(function(){
            res.redirect('/books')
        })
    })
    //Update book
    booksRouter.get('/editbook/:id',upload,function (req,res) {
        const id=req.params.id;
        Bookdata.findOne({_id : id})
        .then(function(book){
            res.render('editbook',{
                nav,
                title :'New Library',
                book
            })
            console.log(book)
        })
        console.log(req.params.id);
    })
    booksRouter.post('/update/:id',upload,(req, res) => {
        const id=req.params.id;
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
        }
        Bookdata.updateOne({_id:id},{$set:item})
        .then(function(){
            res.redirect('/books')
        })
    })

    return booksRouter
}


module.exports=router;