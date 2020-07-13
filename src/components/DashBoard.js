import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to={'createUser'} >Add User</Link> <br />
      <Link to={'/createBook'} >Add Book</Link> <br />
      <Link to={'/bookList'} >Book list</Link> <br />
      <Link to={'createAuthor'} >Add Author</Link><br />
    </div >)
}