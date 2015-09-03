import React, {Component, PropTypes} from 'react';
import Prefixer from 'inline-style-prefixer';
import assign from 'assign-styles';

let flexProps = {
  grow: 'flexGrow',
  shrink: 'flexShrink',
  flow: 'flexFlow',
  width: 'width',
  height: 'height',
  maxHeight: 'maxHeight',
  minHeight: 'minHeight',
  maxWidth: 'maxWidth',
  minWidth: 'minWidth'
}

let alignVals = {
  left: 'flex-start',
  right: 'flex-end',
  top: 'flex-start',
  bottom: 'flex-end'
}

let alignProps = {
  row: {
    align: 'justifyContent',
    verticalAlign: 'alignItems'
  },
  column: {
    align: 'alignItems',
    verticalAlign: 'justifyContent'
  }
}

export default class Box extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let props = this.props;
    let orientation = props.column ? 'column' : 'row';
    let styles = {
      display : (props.inline ? 'inline-flex' : 'flex'),
      flex: (props.flex ? props.flex : '0 1 auto'),
      flexDirection : orientation + (props.reverse ? '-reverse' : '')
    };
    if (props.wrap) {
      styles.flexWrap = 'wrap' + (props.wrap == 'reverse' ? '-reverse' : '');
    }
    
    //special property shortcut `center` to totally center the box
    if (props.center){
      styles.alignItems = 'center'; 
      styles.justifyContent = 'center';
    }
    
    //special property `fit` to fit parent container
    if (props.fit){
      styles.width = '100%';
      styles.height = '100%';
    }
    
    let alignment = alignProps[orientation];
    props.order && (styles.order = props.order);
    
    let prop;
    for (prop in flexProps){
      if (props[prop]){
        styles[flexProps[prop]] = props[prop];
      }
    }
    
    let alignProp;
    for (alignProp in alignment){
      if (props[alignProp]){
        let value = props[alignProp];
        if (alignVals[value]){
          value = alignVals[value];
        }
        styles[alignment[alignProp]] = value;
      }
    }
    
    Prefixer.process(styles);
    
    if (props.style) {
      styles = assign(styles, props.style);
    };
    
    return <div {...this.props} style={styles}>{props.children}</div>;
  }
}

let CSSValues = [PropTypes.string, PropTypes.number];
let alignValues = ['center', 'top', 'right', 'bottom', 'left', 'space-around', 'space-between', 'stretch', 'baseline'];

Box.propTypes = {
  flex: PropTypes.oneOfType(CSSValues),
  grow : PropTypes.number,
  shrink : PropTypes.number, 
  width: PropTypes.oneOfType(CSSValues),
  height: PropTypes.oneOfType(CSSValues),
  flow: PropTypes.string,
  order: PropTypes.number,
  
  inline: PropTypes.bool,
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  wrap : PropTypes.oneOf([PropTypes.bool, 'reverse']),
  
  align : PropTypes.oneOf(alignValues),
  verticalAlign: PropTypes.oneOf(alignValues),
  itemAlign : PropTypes.oneOf(alignValues),
  lineAlign : PropTypes.oneOf(alignValues),

  center:PropTypes.bool,
  fit: PropTypes.bool
}