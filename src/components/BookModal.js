import React from 'react';
import Modal from 'react-modal';
import { connect } from 'formik';

const BookModal = (props) => (
  <Modal
    isOpen={true}
    onRequestClose={props.handleClear}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
  >
    
    <h3>Selected Option!</h3>
    <p>props.book.name</p>
  </Modal>
)

const mapStateToProps = (state, props) => ({
  book: state.books.find((book) => book.id === props.match.params.id)
});

export default connect(mapStateToProps)(BookModal);