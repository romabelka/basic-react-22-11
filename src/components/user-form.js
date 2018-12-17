import React, { Component } from 'react'

class UserForm extends Component {
  static defaultProps = {
    label: 'Username'
  }

  handleUserChange = (ev) => {
    this.props.onChange(ev.target.value)
  }

  render() {
    return (
      <div>
        {this.props.label}: <input value={this.props.value} onChange={this.handleUserChange} />
      </div>
    )
  }
}

export default UserForm
