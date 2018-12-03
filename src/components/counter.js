import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../ac'

class Counter extends Component {
  static propTypes = {}

  render() {
    const { count, handleIncrement } = this.props
    return (
      <div>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => ({
  count: storeState.counter
})

const mapDispatchToProps = {
  handleIncrement: increment // handleIncrement = (...args) => dispatch(increment(...args))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
