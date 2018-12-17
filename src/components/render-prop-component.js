import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class RenderPropComponent extends Component {
  static propTypes = {}

  state = {
    foo: 'bar'
  }

  render() {
    return <Fragment>{this.getItem()}</Fragment>
  }

  getItem() {
    return this.props.children(this.state)
  }
}

export default RenderPropComponent
