import React from 'react'
import warn from '../utils/warn'
import assignStyles from 'assign-styles'
import Box from './Box'

export default props => {
  const {style, horizontal, scrollbarVisible, children} = props

  const scrollbarFlow = scrollbarVisible !== undefined ? scrollbarVisible === true ? 'scroll' : 'hidden' : 'auto'
  const styles = {
    overflowY: horizontal ? 'hidden' : scrollbarFlow,
    overflowX: horizontal ? scrollbarFlow : 'hidden'
  }

  return <Box {...props} column={!horizontal} style={assignStyles(styles, style)} />
}
