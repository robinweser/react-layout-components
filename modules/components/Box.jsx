import React, { Component } from 'react'
import prefixAll from 'inline-style-prefix-all'
import warn from '../utils/warn'
import omit from '../utils/omit'

/**
 * Flexbox Component
 */
export default class Box extends Component {
  render() {

    const alignProps = ['order', 'justifyContent', 'alignItems', 'alignSelf', 'alignContent']
    const sizeProps = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight']
    const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
    const boxProps = [...alignProps, ...sizeProps]

    const layoutProps = [...boxProps, ...flexProps,
      'column', 'row', 'wrap', 'inline', 'center', 'fit'
    ];

    const childProps = omit(this.props, layoutProps);
    const props = this.props;
    const styles = {}

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

    // processing styles and normalizing flexbox specifications
    const prefixedStyles = prefixAll(styles)
    const className = (props.className || '') + ' react-layout-components--box'
    return <div {...childProps} className={ className } style={ {  ...prefixedStyles,  ...props.style} }>
             { props.children }
           </div>
  }
}
