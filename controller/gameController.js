const mongoose = require('mongoose')
const Player1 = require('../models/player1-schema.js')


const index = (req, res) => {
  res.render('index')
}

const postPlayer1Data = (req,res)=>{
  const player1 = new Player1(req.body)

  player1.save()
  .then((result)=>{res.render('index')})
  .catch((err)=>{console.log(err)})
}

const delete_req = (req,res)=>{
  Player1.deleteOne(Player1._id)
    .then((result)=>{res.redirect('/')})
      .catch(err=>{console.log(err)})
}

const player1 = (req, res) => {
  res.render('player1')
}

const player2 = (req, res) => {
  Player1.findOne().sort({createdAt:-1})
  .then((result)=>{
    if(result != null){
      res.render('player2',{player1Data:result})
    }else{
      res.redirect('/')
    }
  })
  .catch((err)=>{console.log(err)})
}

module.exports = {index,postPlayer1Data,delete_req,player1,player2}
