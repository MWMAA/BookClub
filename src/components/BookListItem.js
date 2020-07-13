import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = (props) => {
  return (
    <Link to={`/editBook/${props.book.id}`} >
      <p>Name - {props.book.name}</p>
      <p>Author - {props.book.author}</p>
    </Link >
  );
}

export default BookListItem;