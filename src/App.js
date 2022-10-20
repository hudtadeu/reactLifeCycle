import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    }
  }
  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nst=br&results=10'
    );

    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate de App.js');
  }

  componentDidWillUnMount() {
    console.log('componentDidWillUnMoun de App.js');
  }

  handleShowUsers = (event) => {
    this.setState({ showUsers: event.target.checked });
  };

  render() {
    const { showUsers } = this.state;

    return (
      <div>
        <div className="switch">
          <label>
            Mostrar usuários:
            <input type="checkbox" onChange={this.handleShowUsers} />
            <span className="lever"></span>
          </label>
        </div>
        <hr />
       { showUsers && <div>Users</div>}
      </div>
    )
  }
}
