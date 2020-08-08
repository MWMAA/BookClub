import { v4 as uuidv4 } from 'uuid';

// Book Reducer
const bookReducerDefaultState = [{
  id: uuidv4(),
  name: 'Lord of the rings',
  author: 'J.R.R.Tolkiens',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}, {
  id: uuidv4(),
  name: 'Lord of the rings',
  author: 'starta',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}, {
  id: uuidv4(),
  name: 'Lord of the rings',
  author: 'starta',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}, {
  id: uuidv4(),
  name: 'he was',
  author: 'starta',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}, {
  id: uuidv4(),
  name: 'he was',
  author: 'starta',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}, {
  id: uuidv4(),
  name: 'he was',
  author: 'starta',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}, {
  id: uuidv4(),
  name: 'he was',
  author: 'starta',
  available: 2,
  sold: 30,
  description: 'i am starta',
  price: 50,
  pages: 15,
  edition: 1,
  dateOfPublication: new Date('2014-08-18')
}]

export const bookReducer = (state = bookReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        action.book
      ]
    case 'EDIT_BOOK':
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            ...action.updates
          }
        } else {
          return book
        }
      })
    case 'REMOVE_BOOK':
      return state.filter(({ id }) => id !== action.id)
    default: return state
  }
}

// User Reducer
const userReducerDefaultState = []

export const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ]
    case 'EDIT_USER':
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          }
        } else {
          return user
        }
      })
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== action.id)
    default: return state
  }
}

// Author Reducer
const AuthorReducerDefaultState = [
  {
    id: uuidv4(),
    name: 'Szeth',
    email: 'szeth@gmail.com',
    country: 'shin',
    city: 'shinovar',
    dateOfBirth: '2014-08-18T00:00:00.000Z',
    books: [
      {
        name: 'honnor blade',
        genre: 'wind blade'
      }
    ]
  }, {
    id: uuidv4(),
    name: 'Szeth',
    email: 'szeth@gmail.com',
    country: 'shin',
    city: 'shinovar',
    dateOfBirth: '2014-08-18T00:00:00.000Z',
    books: [
      {
        name: 'honnor blade',
        genre: 'wind blade'
      }
    ]
  }, {
    id: uuidv4(),
    name: 'Sarah J. Mass',
    email: 'szeth@gmail.com',
    country: 'shin',
    city: 'shinovar',
    dateOfBirth: '2014-08-18T00:00:00.000Z',
    books: [
      {
        name: 'honnor blade',
        genre: 'wind blade'
      }
    ]
  }, {
    id: uuidv4(),
    name: 'Robert jordan',
    email: 'szeth@gmail.com',
    country: 'shin',
    city: 'shinovar',
    dateOfBirth: '2014-08-18T00:00:00.000Z',
    books: [
      {
        name: 'honnor blade',
        genre: 'wind blade'
      }
    ]
  }, {
    id: uuidv4(),
    name: 'Brandon sanderson',
    email: 'szeth@gmail.com',
    country: 'shin',
    city: 'shinovar',
    dateOfBirth: '2014-08-18T00:00:00.000Z',
    books: [
      {
        name: 'honnor blade',
        genre: 'wind blade'
      }
    ]
  }, {
    id: uuidv4(),
    name: 'Brandon sanderson',
    email: 'szeth@gmail.com',
    country: 'shin',
    city: 'shinovar',
    dateOfBirth: '2014-08-18T00:00:00.000Z',
    books: [
      {
        name: 'honnor blade',
        genre: 'wind blade'
      }
    ]
  }
]

export const authorReducer = (state = AuthorReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_AUTHOR':
      return [
        ...state,
        action.author
      ]
    case 'EDIT_AUTHOR':
      return state.map((author) => {
        if (author.id === action.id) {
          return {
            ...author,
            ...action.updates
          }
        } else {
          return author
        }
      })
    case 'REMOVE_AUTHOR':
      return state.filter(({ id }) => id !== action.id)
    default: return state
  }
}