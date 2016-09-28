import React, { Component } from 'react'

import omit from '../utils/omit'
import { containerProps, borderShortcutProps, layoutProps } from '../utils/props'

import Box from './Box'

const containerLayoutProps = [
  ...containerProps,
  ...borderShortcutProps
]

/**
 * Container Component
 */
const Container = props => {
  const styles = { }

  if (props.fixed) {
    styles.position = 'fixed'
  }
  if (props.absolute) {
    styles.position = 'absolute'
  }

  // resolving all container properties
  containerProps.forEach(prop => {
    if (props.hasOwnProperty(prop)) {
      styles[prop] = props[prop]
    }
  })

  // resolving the border shortcuts
  borderShortcutProps.forEach(prop => {
    if (props[prop] === true) {
      styles[prop + 'Width'] = props.borderWidth || 1
    }
  })

  const childProps = omit(props, containerLayoutProps)
  return <Box {...childProps} style={{ ...styles, ...props.style }} />
}

export default Container
