const express =require ('express');
const addbookRouter = express.Router();
const addauthorRouter = express.Router();
const Bookdata =require('../model/Bookdata')
const Authordata =require('../model/Authordata')

function addbookroute(nav) {
    addbookRouter.get('/',function (req,res) {
        res.render('addbooks',
        {
            nav,
            title :'Library'
        })
    })
    addbookRouter.post('/add',function (req,res) {   
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }
     var book=Bookdata(item);
     book.save();
     res.redirect('/books')
    
    })
    return addbookRouter
}
module.exports=addbookroute


function addauthorroute(nav) {
    addauthorRouter.get('/',function (req,res) {
        res.render('addauthor',
        {
            nav,
            title :'Library'
        })
    })
    addauthorRouter.post('/add',function (req,res) {
        var item={
            author:req.body.author,
           language:req.body.language,
           genre:req.body.genre,
           image:req.body.image
        }
     var author=Authordata(item);
     author.save();
     res.redirect('/author')   
    })
    return addauthorRouter
}
module.exports=addauthorroute