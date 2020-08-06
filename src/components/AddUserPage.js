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
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add User Page</h1>
          </div>
        </div>
        <div className='content-container'>
          <UserForm
            onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user))
})

export default connect(undefined, mapDispatchToProps)(AddUserPage);