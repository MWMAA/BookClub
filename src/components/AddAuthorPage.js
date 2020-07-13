import React, { Component } from 'react';
import { addAuthor } from '../redux/Actions/authors'
import { connect } from 'react-redux';
import AuthorForm from './AuthorForm';

class AddAuthorPage extends Component {
  onSubmit = (author) => {
    this.props.addAuthor(author);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <p>ADD AUTHOR Page</p>
        <AuthorForm
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAuthor: (author) => dispatch(addAuthor(author))
})

export default connect(undefined, mapDispatchToProps)(AddAuthorPage);