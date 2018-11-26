import React, { Component } from 'react'

class UserForm extends Component {
  state = {
    username: ''
  }

  handleUserChange = (ev) => {
    if (ev.target.value.length > 10)
      return this.setState({
        username: ''
      })

    this.setState({
      username: ev.target.value
    })
  }

  render() {
    return (
      <div>
        Username: <input value={this.state.username} onChange={this.handleUserChange} />
      </div>
    )
  }
}

export default UserForm
