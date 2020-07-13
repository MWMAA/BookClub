import { v4 as uuidv4 } from 'uuid';

// ADD AUTHOR
const authorData = {
  name: '',
  email: '',
  country: '',
  city: '',
  dateOfBirth: new Date('2014-08-18'),
  books: [{ name: '', genre: '' }]
}
export const addAuthor = (author = authorData) => {
  return {
    type: 'ADD_AUTHOR',
    author: {
      id: uuidv4(),
      ...author
    }
  }
}

// EDIT AUTHOR
export const editAuthor = (id, updates) => {
  return {
    type: 'EDIT_AUTHOR',
    id,
    updates
  }
}

// REMOVE AUTHOR
export const removeAuthor = ({ id } = {}) => {
  return {
    type: 'REMOVE_AUTHOR',
    id
  }
}