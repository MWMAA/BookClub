const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const Author = require('../models/authors');

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

router.post('/createAuthor', async (req, res) => {
  const author = new Author({ ...req.body })

  try {
    await author.save()
    res.status(200).send(author)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/readAuthor/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const author = await Author.findById(_id)

    if (!author) {
      res.status(404).send()
    }

    res.status(200).send(author)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/readAuthors', async (req, res) => {
  try {
    const authors = await Author.find()

    res.status(200).send(authors)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/editAuthor/:id', async (req, res) => {
  const _id = req.params.id
  const update = Object.keys(req.body)
  const allowedUpdats = [
    "name",
    "email",
    "country",
    "city",
    "dateOfBirth",
    "books"
  ]
  const isValidOperation = update.every((update) => allowedUpdats.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates!" })
  }

  try {
    const author = await Author.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

    if (!author) {
      return res.status(404).send()
    }

    res.status(200).send(author)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/removeAuthor/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const author = await Author.findByIdAndDelete(_id)

    if (!author) {
      return res.status(404).send()
    }

    res.status(200).send(author)
  } catch (e) {
    res.status(500).send(e)
  }
})

// router.post('/authorImageUpload', avatar.single('authorImage'), async (req, res) => {
//   const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
//   req.avatar = buffer
//   // await req.user.save()
//   res.status(200).send(req.avatar)
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })

module.exports = router