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


const authors = [{
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

router.get('/readAuthor', (req, res) => {
  try {
    const author = authors.find((author) => {
      if (author.id === req.body.id) {
        return author;
      }
    })

    if (!author) {
      res.status(404).send()
    }

    res.status(200).send(author)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/readAuthors', (req, res) => {
  try {
    res.status(200).send(authors)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/createAuthor', (req, res) => {
  try {
    const author = {
      id: uuidv4(),
      ...req.body
    }

    authors.push(author)
    res.status(200).send(authors)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/editAuthor', (req, res) => {
  try {
    const out = authors.map((author) => {
      if (author.id == req.body.id) {
        return {
          ...author,
          ...req.body
        }
      } else {
        return author
      }
    })
    res.status(200).send(out)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/removeAuthor', (req, res) => {
  try {
    const books = authors.filter((author) => author.id !== req.body.id)

    res.status(200).send(books)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/authorImageUpload', avatar.single('authorImage'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.avatar = buffer
  // await req.user.save()
  res.status(200).send(req.avatar)
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message })
})

module.exports = router