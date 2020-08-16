const express = require('express')
require('./db/mongoose')
const port = process.env.PORT || 3001
const bookRouter = require('./router/books')
const authorRouter = require('./router/author')
const userRouter = require('./router/users')

const app = express()

app.use(express.json())
app.use(bookRouter)
app.use(authorRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}!`)
})