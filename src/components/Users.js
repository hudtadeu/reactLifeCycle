import React, { Component } from 'react'

export default class Users extends Component {

  render() {
    const {users} = this.props;

    return (
      <div>{users.map(user => {
        return (<p key={login.uuid}>{user.name.first}</p>)
      })}</div>
    )
  }
}
