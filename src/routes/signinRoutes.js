const express =require ('express');
const signinRouter  = express.Router();
// const Userdata =require('../model/Userdata')
const Signindata=require('../model/Signindata')

function signinRoute(navHome) {
    signinRouter.get("/",function (req,res) {
        res.render("Signin",
        {
            navHome,
            title :'Library'
        })
        signinRouter.post('/add',function (req,res) {
            var item ={
                fname:req.body.fname,
                lname:req.body.lname,
                phonenumber:req.body.phonenumber,
                Email:req.body.Email,
                password:req.body.password,
                // confirmpassword:req.body.confirmpassword
            }
            var signin =Signindata(item)
            signin.save();
            res.redirect('/login')
    
        })
    })
    
  
    return signinRouter
}

module.exports=signinRoute
