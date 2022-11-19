const express = require('express')
const router = express.Router()
const gameController = require('../controller/gameController.js')


router.get('/', gameController.index)

router.post('/', gameController.postPlayer1Data)

router.get('/delete', gameController.delete_req)

router.get('/player1', gameController.player1)

router.get('/player2', gameController.player2)

module.exports = router
