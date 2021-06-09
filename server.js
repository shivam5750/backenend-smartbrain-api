const express = require('express')
const bcrypt = require('bcrypt');
var cors = require('cors')
const knex = require('knex')
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')



const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const database =knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Magnet',
    database : 'smartbrain'
  }
});
database.select('*').from('users').then(data=>{
})


app.get('/', (req, res) => {
    res.send('it is working')
})

app.post('/signin', (req, res) => {signin.handleSigin(req,res,database,bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req,res,database,bcrypt)})

   
app.get('/profile/:id', (req, res) => {profile.handleProfile(req,res,database)})

app.put('/image', (req, res) => {image.handleImage(req, res, database)})

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on server ${process.env.PORT} `)
})

