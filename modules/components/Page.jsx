import React, { Component } from 'react'

export default class Page extends Component {
  render() {
    const props = this.props
    return <div style={{...styles, ...props.style}}>{props.children}</div>
  }
}

const styles = {
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'fixed'
}
