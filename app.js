//modules importing
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/gameRoutes.js')

// server creation

const app = express()

// register view engine as ejs
app.set('view engine', 'ejs')

// static file & middleware's
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

//connect mongodb connection
const dbURI = 'mongodb+srv://kollywood-player1:player1-in-KollywoodGame@blog.dm0zbcz.mongodb.net/kollywood?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then((result) => {
    console.log('DB Connection Success')
    // listen for request
    app.listen(3000)
  })
  .catch((err) => {
    console.log(err);
  })

//routing
app.use('', router)

// 404 error page
app.use((req, res) => {
  res.status(404).render('404page')
})
