const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const Book = require('../models/books')

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

const bookFile = multer({
  limits: {
    fileSize: 10000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf|epub|mobi|pdb|azw)$/)) {
      return cb(new Error('please insert a picture'))
    }

    cb(undefined, true)
  }
})

router.get('/readbook/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const book = await Book.findById(_id)

    if (!book) {
      res.status(404).send()
    }

    res.status(200).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/readbooks', async (req, res) => {
  try {
    res.status(200).send(books)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/createBook', async (req, res) => {
  try {
    const book = new Book({ ...req.body })
    await book.save()
    res.status(200).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/editBook', async (req, res) => {
  const _id = req.params.id
  const update = Object.keys(req.body)
  const allowedUpdats = [
    "name",
    "author",
    "ISBN",
    "available",
    "sold",
    "description",
    "price",
    "pages",
    "edition",
    "dateOfPublication"
  ]

  const isValidOperation = update.every((update) => allowedUpdats.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates!" })
  }

  try {
    const book = await Book.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

    if (!book) {
      return res.status(404).send()
    }

    res.status(200).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/removeBook/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const book = await Book.findByIdAndDelete(_id)

    if (!book) {
      return res.status(404).send()
    }

    res.status(200).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/bookCoverUpload', avatar.single('bookCover'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.avatar = buffer
  res.status(200).send(req.avatar)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})

// router.post('/bookUpload', book.single('book'), async (req, res) => {
//   const buffer = await sharp(req.file.buffer).toBuffer()
//   req.avatar = buffer
//   res.status(200).send(req.avatar)
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })

// router.get('/downloadBook', () => {

// })

module.exports = router