const mongoose = require('mongoose')
const validate = require('validator')
const crypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    required: true,
    type: String,
    trim: true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('password shouldnt include the word "Password"')
      }
    }
  },
  email: {
    type: String,
    unique: true,
    required: true,
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
  district: {
    type: String,
    trim: true
  },
  street: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date
  }
}, {
  timestamps: true
})

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('Incorrect Email or passsword!')
  }

  const isMatch = await crypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Incorrect Email or passsword!')
  }

  return user;
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await crypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('users', userSchema)

module.exports = User