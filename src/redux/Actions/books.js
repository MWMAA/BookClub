import { v4 as uuidv4 } from 'uuid';

// ADD BOOK
const bookValues = {
  // avatar: {},
  name: '',
  author: '',
  ISBN: '',
  rating: 0,
  available: '',
  sold: 0,
  description: '',
  price: '',
  pages: '',
  edition: '',
  commemnts: [],
  ratings: [],
  dateOfPublication: new Date('2014-08-18')
}

export const addBook = (book = bookValues) => {
  return {
    type: 'ADD_BOOK',
    book: {
      id: uuidv4(),
      ...book
    }
  }
}

// EDIT BOOK
export const editBook = (id, updates) => {
  return {
    type: 'EDIT_BOOK',
    id,
    updates
  }
}

// REMOVE BOOK
export const removeBook = ({ id } = {}) => {
  return {
    type: 'REMOVE_BOOK',
    id
  }
}