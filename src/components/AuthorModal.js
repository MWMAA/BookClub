import React from 'react';
import Modal from 'react-modal';

const BookModal = (props) => (
  <Modal
    isOpen={!!props.author}
    onRequestClose={props.handleClear}
    closeTimeoutMS={200}
  >
    <h3>Selected Option!</h3>
    {props.author && <p> {props.author.name}</p>}
  </Modal >
)

export default BookModal;