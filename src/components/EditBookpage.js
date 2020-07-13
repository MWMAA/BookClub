import React, { Component } from 'react';
import { editBook, removeBook } from '../redux/Actions/books'
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { Button } from '@material-ui/core';

class EditBookpage extends Component {
  onSubmit = (book) => {
    this.props.editBook(this.props.book.id, book);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeBook({ id: this.props.book.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>EDIT BOOK PAGE</p>
        <BookForm
          book={this.props.book}
          onSubmit={this.onSubmit}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.onRemove}
        >
          Remove book
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  book: state.books.find((book) => book.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editBook: (id, book) => dispatch(editBook(id, book)),
  removeBook: (data) => dispatch(removeBook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBookpage)