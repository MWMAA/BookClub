import React from 'react';
import { connect } from 'react-redux';
import AuthorListItem from './AuthorListItem';

const AuthorList = (props) => {
  return (
    <div>
      {
        props.authors.length === 0 ? (
          <div>
            <p>No Authors currently available</p>
          </div>
        ) : (
            props.authors.map((author) => (
              <AuthorListItem
                key={author.id}
                author={author}
              />
            ))
          )
      }
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    authors: state.authors
  }
}

export default connect(mapStateToProps)(AuthorList);