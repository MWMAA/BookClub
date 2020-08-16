const mongoose = require('mongoose')
const validate = require('validator')

const authorSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validate.isEmail(value)) {
        throw new Error('Email isnt valid')
      }
    }
  },
  country: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date
  },
  books: [{
    ISBN: {
      type: Number,
      required: true,
      ref: 'books' // connecting with books collection
    }
  }]
}, {
  timestamps: true
})

const authors = mongoose.model('authors', authorSchema)

module.exports = authors