  import React, { Component } from 'react';
  import './User.css';
  import './bootstrap.min.css';
  import {connect} from 'react-redux';
  import * as userActions from '../../actions/userActions';
  import './User.css';
  import axios from 'axios';

  class Users extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        user: { name: ''
        }
      };
    }

    onNameChange = e => {
      const user = this.state.user;
      user.name = e.target.value;
      this.setState({ user: user });
    }

    // onClickSave = () => {
    //   this.props.dispatch(userActions.createUser(this.state.user));
    //   // alert(`Saving ${this.state.user.name}`);
    // }

    userRow(user, index) {
      return <div key={index}>{user.name}</div>;
    }

    render() {
      return (
        <div>
          <input
            type="text"
            onChange={this.onNameChange}
            value={this.state.user.name} />
          <input
            type="submit"
            value="save"
            onClick={this.onClickSave} />
            {this.props.users.map(this.userRow)}
        </div>
      );
    }
  }

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
export default connect(mapStateToProps)(Users);