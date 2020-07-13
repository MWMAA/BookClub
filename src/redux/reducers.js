// Book Reducer
const bookReducerDefaultState = []

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
const AuthorReducerDefaultState = []

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