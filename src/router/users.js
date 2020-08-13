const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const { v4: uuidv4 } = require('uuid');

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

const users = [{
  id: 1,
  name: 'hawweeee'
}, {
  id: 2,
  name: 'hoolie'
}, {
  id: 3,
  name: 'hawdini'
}, {
  id: 4,
  name: 'lenoard'
}]

router.get('/readUser', (req, res) => {
  try {
    const user = users.find((user) => {
      if (user.id === req.body.id) {
        return user;
      }
    })

    if (!user) {
      res.status(404).send()
    }

    res.status(200).send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/readUsers', (req, res) => {
  try {
    res.status(200).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/createUser', (req, res) => {
  try {
    const user = {
      id: uuidv4(),
      ...req.body
    }

    users.push(user)
    res.status(200).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/editUser', (req, res) => {
  try {
    const out = users.map((user) => {
      if (user.id == req.body.id) {
        return {
          ...user,
          ...req.body
        }
      } else {
        return user
      }
    })
    res.status(200).send(out)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/removeUser', (req, res) => {
  try {
    const out = users.filter((user) => user.id !== req.body.id)

    res.status(200).send(out)
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