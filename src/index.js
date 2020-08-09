const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bookRouter = require('./router/books')
const authorRouter = require('./router/author')
const userRouter = require('./router/users')


app.use(express.json())
app.use(bookRouter)
app.use(authorRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}!`)
})