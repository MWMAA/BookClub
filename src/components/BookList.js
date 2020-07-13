import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';



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
      <div>
        {
          this.props.books.length === 0 ? (
            <div>
              <p>No books currently available</p>
            </div>
          ) : (
              this.props.books.map((book) => (
                <BookListItem
                  key={book.id}
                  book={book}
                  handleClear={this.handleClear}
                  handleChoose={this.handleChoose}
                />
              ))
            )
        }
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