import React, {Component, PropTypes} from 'react'
import Prefixer from 'inline-style-prefixer'
import assignStyles from 'assign-styles'

//Box model properties
let sizeProps = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight']
let paddingProps = ['padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']
let marginProps = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom']
let borderProps = ['border', 'borderWidth', 'borderColor', 'borderStyle', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom']
let positionProps = ['top', 'left', 'bottom', 'right']
let overflowProps = ['overflow', 'overflowX', 'overflowY']
let boxProps = [...sizeProps, ...paddingProps, ...marginProps, ...borderProps, ...positionProps, ...overflowProps]

//Flexbox properties
let alignProps = ['order', 'justifyContent', 'alignItems', 'alignSelf', 'alignContent']
let flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']

//Shortcut properties
let borderShortcutProps = ['borderTop', 'borderWidth', 'borderRight', 'borderLeft']
let shortcutProps = {
  fit: {width: '100%', height:'100%'},
  center: {justifyContent: 'center', alignItems: 'center'},
  fixed: {position: 'fixed'},
  absolute: {position: 'absolute'}
}

export default class Box extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    let props = this.props
    let styles = {
      display: 'flex'
    } 
    //resolving inline-flex display style
    if (props.inline) {
      styles.display = 'inline-' + styles.display
    }

    //resolving the flow properties flex-wrap and flex-direction
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

    //resolving all box model properties including padding, margin, size, border and position
    boxProps.forEach(prop => {
      if (props[prop]) {
        styles[prop] = props[prop]
      }
    }) 
    
    //resolving all flexbox aligning properties
    alignProps.forEach(prop => {
      if (props[prop]) {
        styles[prop] = props[prop]
      }
    }) 
    
    //resolving flex properties and its shortcut
    flexProps.forEach(prop => {
      if (props[prop]) {
        if (styles.flex) {
          console.warn('Do not use both shortcut `flex` property and single `grow`, `shrink` or `basis`.')
          console.warn('Those will overwrite the previously set `flex` value.')
        }
        styles[prop] = props[prop]
      }
    }) 
    
    //resolving the border shortcuts
    borderShortcutProps.forEach(prop => {
      if (props[prop]) {
        if (props.borderWidth) {
          styles[prop + 'Width'] = props.borderWidth
        } else {
          console.warn('Using border shortcuts such as `borderTop={true}` requires a `borderWidth` to be set.')
          console.warn('There will be no special border added.')
        }
      }
    })
    
    //resolving more complex shortcuts with special styles
    let shortcut
    for (shortcut in shortcutProps) {
      if (props[shortcut]) {
        assignStyles(styles, shortcutProps[shortcut])
      }
    }

    //processing styles and normalizing flexbox specifications
    Prefixer.process(styles)
    
    //merging with existing styles for more developer freedom
    if (props.style) {
      styles = assignStyles(styles, props.style)
    }

    return <div {...this.props} style={styles}>{props.children}</div>
  }
}