import React, { Component } from 'react';
import { addBook } from '../redux/Actions/books'
import { connect } from 'react-redux';
import BookForm from './BookForm';

class AddBookPage extends Component {
  onSubmit = (book) => {
    this.props.addBook(book);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <p>ADD BOOK Page</p>
        <BookForm
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book))
})

export default connect(undefined, mapDispatchToProps)(AddBookPage);