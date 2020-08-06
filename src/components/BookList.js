import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import BookModal from './BookModal';

class BookList extends React.Component {
  state = {
    SelectedBook: undefined
  };
  handleClear = () => {
    this.setState(() => ({
      SelectedBook: undefined
    }))
  }
  handleChoose = (book) => {
    this.setState(() => ({
      SelectedBook: book
    }))
  }
  render() {
    return (
      <div className='content-container_book_list'>
        {
          this.props.books.length === 0 ? (
            <div className='content-container'>
              <h3 className='none_available'>No books currently available</h3>
            </div>
          ) : (
              this.props.books.map((book) => (
                <BookListItem
                  key={book.id}
                  book={book}
                  handleChoose={this.handleChoose}
                />
              ))
            )
        }
        <BookModal
          book={this.state.SelectedBook}
          handleClear={this.handleClear}
        />
      </div >
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);