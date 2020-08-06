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
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Author Page</h1>
          </div>
        </div>
        <div className='content-container'>
          <AuthorForm
            onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAuthor: (author) => dispatch(addAuthor(author))
})

export default connect(undefined, mapDispatchToProps)(AddAuthorPage);