import React, { Component } from 'react';
import { editAuthor, removeAuthor } from '../redux/Actions/authors'
import { connect } from 'react-redux';
import AuthorForm from './AuthorForm';
import { Button } from '@material-ui/core';

class EditAuthorPage extends Component {
  onSubmit = (author) => {
    this.props.editAuthor(this.props.author.id, author);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeAuthor({ id: this.props.author.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Author Page</h1>
          </div>
        </div>
        <div className='content-container'>
          <AuthorForm
            author={this.props.author}
            onSubmit={this.onSubmit}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.onRemove}
            className='remove-btn'
          >
            Remove Author
        </Button>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state, props) => ({
  author: state.authors.find((author) => author.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editAuthor: (id, author) => dispatch(editAuthor(id, author)),
  removeAuthor: (data) => dispatch(removeAuthor(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAuthorPage);