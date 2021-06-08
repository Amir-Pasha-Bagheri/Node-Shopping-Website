//require('crypto').randomBytes(64).toString('hex') HOW TO GET TOKENS

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const cors =  require('cors')
const bcrypt = require('bcrypt')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const app = express()

const initializePassport = require('./passport-config')
initializePassport(passport,username=>USERS.find(user=>user.username===username),id=>USERS.find(user=>user.id===id))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({origin: "http://localhost:3000",credentials: true,}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

/* ------------------------------ DATA BASE ARRAY ------------------------------ */

const USERS = []
const TOKENS = []

/* ------------------------------ API CODE ------------------------------ */

app.get('/', checkAuthenticated, (req,res)=>{
    const user = USERS.find(user=>user.username===req.user.username)
    res.send({username : user.username , cart : user.cart})
})

app.post('/LogIn',(req,res,next) =>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) throw err
        if(!user) res.send({message : info.message})
        else{
            req.logIn(user, (err) =>{
                if (err) throw err
                
                // JWT SETUP
                const accessToken = jwt.sign({username:req.user.username}, process.env.ACCESS_TOKEN_SECRET , {expiresIn : '10m'})
                const refreshToken = jwt.sign({username:req.user.username}, process.env.REFRESH_TOKEN_SECRET , {expiresIn : '7d'})
                TOKENS.push(refreshToken)
                res.send({accessToken:accessToken,refreshToken:refreshToken, username:req.user.username ,id:req.user .id , cart:req.user.cart})
            })
        }
    })(req,res,next)
})

app.post('/SignUp',async (req,res)=>{
    const NewUsername =  USERS.find(user=>user.username===req.body.username)
    
    if(NewUsername){
        res.send('This Username Already Exist !')
    }
    else{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        USERS.push({
            username : req.body.username,
            password : hashedPassword,
            id : Date.now().toString(),
            cart : []
        })
        res.send('ok')
    }
})


/* ------------------------------ Middlewares ------------------------------ */


function checkAuthenticated(req,res,next) {
    if(req.isAuthenticated()){
        
        //Token Authentication Check

        const AuthHeader = req.headers['authorization']
        const token = AuthHeader && AuthHeader.split(' ')[1]

        if(token === null) return res.send({username : '' , cart : []})
            jwt.verify(token , process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if (err) return res.send({username : '' , cart : []})
            req.user = user
            next()
        })

    }
    else res.send({username : '' , cart : []})
}

app.listen(3001,()=>console.log('Running On Port 3001...'))