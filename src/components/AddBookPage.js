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
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Book Page</h1>
          </div>
        </div>
        <div className='content-container'>
          <BookForm
            onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book))
})

export default connect(undefined, mapDispatchToProps)(AddBookPage);