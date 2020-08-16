const mongoose = require('mongoose')
const Author = require('./authors')

const bookSchema = new mongoose.Schema({
  // avatar: {},
  name: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    ref: 'authors'
  },
  ISBN: {
    type: Number,
    required: true,
    default: 1234567891230,
  },
  // rating: {},
  available: {
    type: Number,
    required: true,
    default: 0,
  },
  sold: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    required: true,
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    default: 1,
  },
  pages: {
    type: Number,
    required: true,
    default: 1,
  },
  edition: {
    type: Number,
    required: true,
    default: 1,
  },
  // commemnts: {},  // dict {User int:ID? : Comment:Int } ??? 
  // ratings: {},  // dict {User int:ID? : Rating:Int } ??? 
  dateOfPublication: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

const Book = mongoose.model('books', bookSchema)

module.exports = Book