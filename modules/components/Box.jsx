import React from 'react'
import prefixAll from 'inline-style-prefixer/static'

import omit from '../utils/omit'
import { boxProps, flexProps, layoutProps } from '../utils/props'

/**
 * Flexbox Component
 */
const Box = props => {
  const styles = { }

  // shortcut props
  if (props.fit) {
    styles.width = '100%'
    styles.height = '100%'
  }

  if (props.center) {
    styles.justifyContent = 'center'
    styles.alignItems = 'center'
  }

  // resolving inline-flex display style
  if (props.inline) {
    styles.display = 'inline-' + styles.display
  }

  // resolving the flow properties flex-wrap and flex-direction
  if (props.wrap) {
    styles.flexWrap = 'wrap'
    if (props.wrap === 'reverse') {
      styles.flexWrap += '-reverse'
    }
  }

  if (props.column) {
    styles.flexDirection = 'column'
    if (props.reverse) {
      styles.flexDirection += '-reverse'
    }
  } else {
    if (props.reverse) {
      styles.flexDirection = 'row-reverse'
    }
  }

  // resolving all box properties
  boxProps.forEach(prop => {
    if (props.hasOwnProperty(prop)) {
      styles[prop] = props[prop]
    }
  })

  // resolving flex properties and its shortcut
  flexProps.forEach(prop => {
    if (props.hasOwnProperty(prop)) {
      styles[prop] = props[prop]
    }
  })

  // processing styles and normalizing flexbox specifications
  const prefixedStyles = prefixAll(styles)
  const className = (props.className || '') + ' react-layout-components--box'
  const childProps = omit(props, layoutProps)

  return (
    <div {...childProps} className={className} style={{ ...prefixedStyles, ...props.style }}>
      {props.children}
    </div>
  )
}

export default Box
