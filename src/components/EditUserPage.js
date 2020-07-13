import React, { Component } from 'react';
import { editUser, removeUser } from '../redux/Actions/users'
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { Button } from '@material-ui/core';

class EditUserPage extends Component {
  onSubmit = (user) => {
    this.props.editUser(this.props.user.id, user);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeUser({ id: this.props.user.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <p>EDIT USER PAGE</p>
        <UserForm
          user={this.props.user}
          onSubmit={this.onSubmit}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.onRemove}
        >
          Remove User
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.users.find((user) => user.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editUser: (id, user) => dispatch(editUser(id, user)),
  removeUser: (data) => dispatch(removeUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);