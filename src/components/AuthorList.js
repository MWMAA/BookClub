import React from 'react';
import { connect } from 'react-redux';
import AuthorListItem from './AuthorListItem';
import AuthorModal from './AuthorModal';

class AuthorList extends React.Component {
  state = {
    SelectedAuthor: undefined
  };
  handleClear = () => {
    this.setState(() => ({
      SelectedAuthor: undefined
    }))
  }
  handleChoose = (author) => {
    this.setState(() => ({
      SelectedAuthor: author
    }))
  }
  render() {
    return (
      <div className='content-container_author_list'>
        {
          this.props.authors.length === 0 ? (
            <div>
              <p>No authors currently available</p>
            </div>
          ) : (
              this.props.authors.map((author) => (
                <AuthorListItem
                  key={author.id}
                  author={author}
                  handleChoose={this.handleChoose}
                />
              ))
            )
        }
        <AuthorModal
          author={this.state.SelectedAuthor}
          handleClear={this.handleClear}
        />
      </div >
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    authors: state.authors
  }
}

export default connect(mapStateToProps)(AuthorList);