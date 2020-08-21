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

router.post('/users', async (req, res) => {
  try {
    const user = new User({ ...req.body })
    const token = await user.generateAuthToken()
    await user.save()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.status(202).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
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

router.get('/Users/me', auth, async (req, res) => {
  res.status(206).send(req.user)
})

// GET/ tasks?limit=3&skip=3
// GET/ tasks?sortBy=createdAt:asc
router.get('/users', auth, async (req, res) => {
  try {
    const sort = {}
    const match = {}

    if (req.body) {
      Object.assign(match, req.body)
    }

    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':')
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    const users = await User.find(match,
      {},
      {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort
      })

    res.status(200).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/users/me', auth, async (req, res) => {
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
    updates.forEach((update) => req.user[update] = req.body[update])
    await req.user.save()

    res.status(202).send(req.user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove()
    res.status(200).send(req.user)
  } catch (e) {
    res.status(500).send(e)
  }
})

// router.get('/users/:id', auth, async (req, res) => {
//   const _id = req.params.id
//   try {
//     const user = await User.findById(_id)

//     if (!user) {
//       res.status(404).send()
//     }

//     res.status(200).send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

module.exports = router