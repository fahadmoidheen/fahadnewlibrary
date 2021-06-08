const express =require ('express');
const loginRouter  = express.Router();
const Signindata=require('../model/Signindata')
  


function loginRoute(navHome) {
    loginRouter.get("/",function (req,res) {
        res.render("Login",
        {
            navHome,
            title :'Library'
        })
    })
    loginRouter.post("/add",function (req,res) {
        var useremail=req.body.Email
        var userpwd=req.body.password
        
        Signindata.findOne({"Email":useremail})
        .then(function(data) {
            console.log(data)
            if(useremail=="cristiano@admin.com" && userpwd=="Cristiano@7"){
                res.redirect('/Home')
                console.log("Logged in as admin")
            }else if(useremail==data?.Email && userpwd==data?.password){
                res.redirect('/user/userHome')
                console.log("Logged in as user") 
            }else{
                res.redirect('/login');
                console.log("Invalid user")
            }
        }).catch(err=>console.log(err))
    })
    
    return loginRouter
}

module.exports=loginRoute;
