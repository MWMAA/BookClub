import React, { Component } from 'react';
import { addUser } from '../redux/Actions/users'
import { connect } from 'react-redux';
import UserForm from './UserForm';

class AddUserPage extends Component {
  onSubmit = (user) => {
    this.props.addUser(user);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <p>ADD USER Page</p>
        <UserForm
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user))
})

export default connect(undefined, mapDispatchToProps)(AddUserPage);