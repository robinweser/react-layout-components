import React from 'react'
import Prefixer from 'inline-style-prefixer'
import assignStyles from 'assign-styles'
import warn from '../utils/warn'

const prefixer = new Prefixer()

/**
 * The basic flexbox Component that is equivalent to React Native's <View>-Component
 */
export default props => {
  const alignProps = ['order', 'justifyContent', 'alignItems', 'alignSelf', 'alignContent']
  const sizeProps = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight']
  const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
  const boxProps = [...alignProps, ...sizeProps]

  const styles = {display: 'flex'}

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
    if (props[prop]) {
      styles[prop] = props[prop]
    }
  })

  // resolving flex properties and its shortcut
  flexProps.forEach(prop => {
    if (props[prop]) {
      if (styles.flex) {
        warn('Do not use both shortcut `flex` property and single `grow`, `shrink` or `basis`.', 'Those will overwrite the previously set `flex` value.')
      }
      styles[prop] = props[prop]
    }
  })

  // NOTE: This is deprecated and will be removed with version 3.0. Try to avoid it and use <Container> instead.
  resolveDeprecatedProps(props, styles)

  // processing styles and normalizing flexbox specifications
  prefixer.prefix(styles)

  // merging with existing styles for more developer freedom
  if (props.style) {
    assignStyles(styles, props.style)
  }

  return <div {...props} style={styles}>{props.children}</div>
}

const resolveDeprecatedProps = (props, styles) => {
  let needWarning = false

  if (props.fixed) {
    styles.position = 'fixed'
    needWarning = true
  }
  if (props.absolute) {
    styles.position = 'absolute'
    needWarning = true
  }

  const paddingProps = ['padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']
  const marginProps = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom']
  const borderProps = ['border', 'borderWidth', 'borderColor', 'borderStyle', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom']
  const positionProps = ['top', 'left', 'bottom', 'right']
  const overflowProps = ['overflow', 'overflowX', 'overflowY']
  const deprecatedProps = [
    ...paddingProps, ...marginProps, ...borderProps, ...positionProps, ...overflowProps
  ]

  // resolving all deprecated properties
  deprecatedProps.forEach(prop => {
    if (props[prop]) {
      styles[prop] = props[prop]
      needWarning = true
    }
  })

  // resolving the border shortcuts
  const borderShortcutProps = ['borderTop', 'borderWidth', 'borderRight', 'borderLeft']
  borderShortcutProps.forEach(prop => {
    if (props[prop] === true) {
      if (props.borderWidth) {
        styles[prop + 'Width'] = props.borderWidth
        needWarning = true
      } else {
        warn('Using border shortcuts such as borderTop={true} requires a borderWidth to be set.')
        warn('There will be no special border added.')
      }
    }
  })

  if (needWarning) {
    warn('Deprecated: Using one of the following props is deprecated for <Box>. Use the <Container> Component instead.', deprecatedProps.join(', ') + ', fixed, absolute')
  }

  return styles
}
