const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const User = require('../models/users')
const auth = require('../middleware/auth')

const router = express()

const avatar = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('please insert a picture'))
    }

    cb(undefined, true)
  }
})

router.post('/createUser', async (req, res) => {
  try {
    const user = new User({ ...req.body })
    const token = await user.generateAuthToken()
    await user.save()
    res.status(200).send({ user, token })
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.status(200).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })

    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []

    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/readUser/:id', auth, async (req, res) => {
  const _id = req.params.id
  try {
    const user = await User.findById(_id)

    if (!user) {
      res.status(404).send()
    }

    res.status(200).send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/Users/me', auth, async (req, res) => {
  res.status(200).send(req.user)
})

router.get('/readUsers', async (req, res) => {
  try {
    const users = await User.find()

    res.status(200)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/editUser/:id', async (req, res) => {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdats = [
    "name",
    "password",
    "email",
    "country",
    "city",
    "district",
    "street",
    "dateOfBirth"
  ]

  const isValidOperation = updates.every((update) => allowedUpdats.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates!" })
  }

  try {
    const user = await User.findById(_id)
    updates.forEach((update) => user[update] = req.body[update])
    await user.save()

    if (!user) {
      return res.status(404).send()
    }

    res.status(200).send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/removeUser/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const user = await User.findByIdAndDelete(_id)

    if (!user) {
      res.status(404).send()
    }

    res.status(200).send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/userAvatarUpload', avatar.single('avatar'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.avatar = buffer
  // await req.user.save()
  res.status(200).send(req.avatar)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})

module.exports = router