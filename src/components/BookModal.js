import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const BookModal = (props) => (
  <Modal
    isOpen={!!props.book}
    onRequestClose={props.handleClear}
    closeTimeoutMS={200}
    className='modal'
  >
    {props.book && (
      <div>
        <p className='modal__title '> {props.book.name}</p>
        <Link to={`/editbook/${props.book.id}`} >
          <Button variant="contained" color="primary">Edit Book</Button>
        </Link>
      </div>
    )}
  </Modal>
)

export default BookModal;