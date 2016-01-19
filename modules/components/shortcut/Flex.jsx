import React, { Component } from 'react'
import Box from '../Box'

export default class Flex extends Component {
  render() {
    return <Box {...props} flex='1 0 auto' />
  }
}
