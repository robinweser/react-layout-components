import React from 'react'
import warn from '../utils/warn'
import Box from './Box'

export default props => {
  const {style, horizontal, children} = props

  const styles = {
    overflowY: horizontal ? 'hidden' : 'auto',
    overflowX: horizontal ? 'auto' : 'hidden'
  }

  return <Box {...props} column={!horizontal} style={{...styles, ...style}} />
}
