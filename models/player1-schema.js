const mongoose = require('mongoose');

//schema Creation

const Schema = mongoose.Schema;

const player1Schema = new Schema({
  hero: {
    type: String,
    required: true
  },
  heroHint: {
    type: String,
    required: true
  },
  heroine: {
    type: String,
    required: true
  },
  heroineHint: {
    type: String,
    required: true
  },
  song: {
    type: String,
    required: true
  },
  songHint: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  movieHint: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

//model creation
const Player1 = mongoose.model('Player1', player1Schema);

//Exporting model
module.exports = Player1;
