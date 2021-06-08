const express =require ('express');
const app= express();
const port=process.env.PORT || 3434;

 const nav =[
    {
        link:'/Home',name:'Home'
    },
    {
        link:'/books',name:'Book'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    },
    {
        link:'/',name:'Logout'
    },
]
var userNav =[
    {
        link:'/user/userHome' ,name:'Home'
    },
    {
        link:'/user/userBooks',name:'Book'
    },
    {
        link:'/user/userAuthors',name:'Author'
    },
    {
        link:'/',name:'Logout'
    }
]

var navHome=[
    {
        link:'/signin',name:'Sign Up'
    },
    {
        link:'/login',name:'Log In'
    }
]

const booksRouter =require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav)
const signinRouter=require('./src/routes/signinRoutes')(navHome);
const loginRouter =require('./src/routes/loginroutes')(navHome);
const addbookRouter=require('./src/routes/addbookRoutes')(nav)
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav)
const userRouter=require('./src/routes/userRoutes')(userNav)

app.use(express.urlencoded({extended :true}));
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signin',signinRouter);
app.use('/login',loginRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/user',userRouter)




app.get("/Home",function (req,res) {
    res.render("Home",{
        nav,
        title :' Library'
    })
})


app.get("/",function (req,res) {
    res.render("index",
    {
        navHome,
        title :' Library'
    })
})




app.listen(port,()=>{console.log("server is ready at "+port)});