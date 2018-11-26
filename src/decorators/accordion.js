//HOC === Higher Order Component === Decorator
import React from 'react'

export default (OriginalComponent) =>
  class AccordionComponent extends React.Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (id) => (ev) => {
      this.setState((state) => {
        return {
          openItemId: state.openItemId === id ? null : id
        }
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
