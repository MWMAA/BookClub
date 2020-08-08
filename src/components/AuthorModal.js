import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const BookModal = (props) => (
  <Modal
    isOpen={!!props.author}
    onRequestClose={props.handleClear}
    closeTimeoutMS={200}
  >
    {props.author && (
      <div>
        <p> {props.author.name}</p>
        <Link to={`/editAuthor/${props.author.id}`} >
          <Button variant="contained" color="primary">Edit Author</Button>
        </Link>
      </div>
    )}
  </Modal>
)

export default BookModal;