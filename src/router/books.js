const express = require('express')
const router = express()
const { v4: uuidv4 } = require('uuid');

const books = [{
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

router.get('/readbook', (req, res) => {
  try {
    const book = books.find((book) => {
      if (book.id === req.body.id) {
        return book;
      }
    })

    if (!book) {
      res.status(404).send()
    }

    res.status(200).send(book)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.get('/readbooks', (req, res) => {
  try {
    res.status(200).send(books)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/createBook', (req, res) => {
  try {
    const book = {
      id: uuidv4(),
      ...req.body
    }

    books.push(book)
    res.status(200).send(books)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.patch('/editBook', (req, res) => {
  try {
    const out = books.map((book) => {
      if (book.id == req.body.id) {
        return {
          ...book,
          ...req.body
        }
      } else {
        return book
      }
    })
    res.status(200).send(out)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/removeBook', (req, res) => {
  try {
    const out = books.filter((book) => book.id !== req.body.id)

    res.status(200).send(out)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router