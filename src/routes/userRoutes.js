const express =require ('express');
const userRouter = express.Router();
const Bookdata =require('../model/Bookdata')
const Authordata =require('../model/Authordata')

function userRoute(userNav) {
    userRouter.get('/userHome',function (req,res) {
        res.render('userHome',
        {
            userNav,
            title :'  Library'
        })
    })
    userRouter.get('/userBooks',function (req,res) {
        Bookdata.find()
        .then(function(books){
            res.render('userBooks',{
                userNav,
                title :' Library',
                books
            })
        })
        
    })
    userRouter.get('/userBooks/:id',function (req,res) {
        const id =req.params.id
        Bookdata.findOne({_id : id})
        .then(function (books) {
            res.render('usersinglebook',
            {
                userNav,
                title :'Library',
                books
            }) 
        })
        
    })
    userRouter.get('/userAuthors',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render('userAuthors',
            {
                userNav,
                title :' Library',
                authors
            })
        })
    })
    userRouter.get('/userAuthors/:id',function (req,res) {
        const id =req.params.id
        Authordata.findOne({_id : id})
        .then(function (authors) {
            res.render('usersingleauthor',
            {
                userNav,
                title :'Library',
                authors
            }) 
        })
        
    })
    return userRouter
}
module.exports=userRoute;