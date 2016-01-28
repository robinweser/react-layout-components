import React, { Component } from 'react'
import Box from '../Box'

export default class VBox extends Component {
  render() {
    return <Box {...this.props} column />
  }
}
