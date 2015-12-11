import React from 'react'
import warn from '../utils/warn'
import Box from './Box'

/**
 * Container Component
 */
export default props => {
  const styles = {}

  if (props.fixed) {
    styles.position = 'fixed'
  }
  if (props.absolute) {
    styles.position = 'absolute'
  }

  const paddingProps = ['padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']
  const marginProps = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom']
  const borderProps = ['border', 'borderWidth', 'borderColor', 'borderStyle', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom']
  const positionProps = ['top', 'left', 'bottom', 'right']
  const overflowProps = ['overflow', 'overflowX', 'overflowY', 'textOverflow', 'whiteSpace']
  const containerProps = ['boxSizing', ...paddingProps, ...marginProps, ...borderProps, ...positionProps, ...overflowProps]

  // resolving all container properties
  containerProps.forEach(prop => {
    if (props[prop]) {
      styles[prop] = props[prop]
    }
  })

  // resolving the border shortcuts
  const borderShortcutProps = ['borderTop', 'borderWidth', 'borderRight', 'borderLeft']
  borderShortcutProps.forEach(prop => {
    if (props[prop] === true) {
      if (props.borderWidth) {
        styles[prop + 'Width'] = props.borderWidth
      } else {
        warn('Using border shortcuts such as borderTop={true} requires a borderWidth to be set. There will be no special border added.')
      }
    }
  })

  return <Box {...props} style={{...styles, ...props.style}} />
}
