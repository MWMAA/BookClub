import React from 'react';
import { Link } from 'react-router-dom';

const AuthorListItem = (props) => {
  return (
    <Link to={`/editAuthor/${props.author.id}`}>
      <p>Name - {props.author.name}</p>
    </Link>
  );
}

export default AuthorListItem;