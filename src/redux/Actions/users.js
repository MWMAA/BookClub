import { v4 as uuidv4 } from 'uuid';

// ADD USER
const userValues = {
  // avatar: '',
  name: '',
  password: '',
  email: '',
  country: '',
  city: '',
  district: '',
  street: '',
  dateOfBirth: new Date('2014-08-18')
}

export const addUser = (user = userValues) => {
  return {
    type: 'ADD_USER',
    user: {
      id: uuidv4(),
      ...user
    }
  }
}

// EDIT USER
export const editUser = (id, updates) => {
  return {
    type: 'EDIT_USER',
    id,
    updates
  }
}

// REMOVE USER
export const removeUser = ({ id } = {}) => {
  return {
    type: 'REMOVE_USER',
    id
  }
}