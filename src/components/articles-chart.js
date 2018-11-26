import React, { Component } from 'react'

class ArticlesChart extends Component {
  render() {
    return <div ref={this.setContainerRef} />
  }

  componentDidUpdate() {
    //check props, update chart
  }

  setContainerRef = (ref) => {
    this.container = ref
    if (ref) {
      //do chart initialization
    }
  }

  componentWillUnmount() {
    //do cleanup
  }
}

export default ArticlesChart
