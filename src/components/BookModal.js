import React from 'react';
import Modal from 'react-modal';
import { Button, Link } from '@material-ui/core';

const BookModal = (props) => (
  <Modal
    isOpen={!!props.book}
    onRequestClose={props.handleClear}
    closeTimeoutMS={200}
  >
    <h3>Selected Option!</h3>
    {props.book && (
      <div>
        <p> {props.book.name}</p>
        <Link to={`/editbook/${props.book.id}`} >
          <Button variant="contained" color="primary">Edit Book</Button>
        </Link>
      </div>)}

  </Modal >
)

export default BookModal;