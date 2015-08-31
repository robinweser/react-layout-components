import React, {Component, PropTypes} from 'react';
import assign from 'assign-styles';

let boxProps = [
  'width', 'height', 'padding', 'margin', 'boxSizing', 'overflow', 'overflowX', 'overflowY'
];

export default class Container extends Component {
  constructor() {
    super(...arguments);
  }
	
  render() {
    let styles = {};
    let props = this.props;
    
    //resolving border system
    props.borderColor && (styles['borderColor'] = props.borderColor);
    let width = (props.borderWidth ? parseFloat(props.borderWidth) + 'px ' : '1px ');
    let borderWidth = '';
    let borders = ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'];
    borders.forEach(function (item) {
      borderWidth += (props[item] ? width : '0 ');
    });
    if (borderWidth.trim() != '0000') {
      styles['borderWidth'] = borderWidth;
    }
    styles['borderStyle'] = (props.borderStyle ? props.borderStyle : 'solid');
    
    //special vertical scrolling shortcut
    if (props.scroll){
      styles.overflowY = 'auto';
    }
    
    boxProps.forEach(property => {
      if (props.hasOwnProperty(property)){
        styles[property] = props.property;
      }
    });

    if (props.style) {
			styles = assign(styles, props.style);
		};
    
    return <div {...this.props} style={styles}>{props.children}</div>;
  }
}

let CSSValues = [PropTypes.string, PropTypes.number];
let overflowValues = ['visible', 'hidden', 'scroll', 'auto'];

Container.propTypes = {
  width : PropTypes.oneOfType(CSSValues),
  height: PropTypes.oneOfType(CSSValues),
  padding: PropTypes.oneOfType(CSSValues),
  margin: PropTypes.oneOfType(CSSValues),
  
  boxSizing: PropTypes.oneOf(['content-box', 'border-box']),
  overflow: PropTypes.oneOf(overflowValues),
  overflowX: PropTypes.oneOf(overflowValues),
  overflowY: PropTypes.oneOf(overflowValues),
  
  borderColor: PropTypes.string,
  borderStyle: PropTypes.oneOf(['none','hidden','dotted','dashed','solid','double','groove','ridge','inset','outset']),
  borderWidth : PropTypes.oneOfType(CSSValues),
  borderTop : PropTypes.oneOfType(CSSValues),
  borderLeft : PropTypes.oneOfType(CSSValues),
  borderRight : PropTypes.oneOfType(CSSValues),
  borderBottom : PropTypes.oneOfType(CSSValues),
  
  scroll : PropTypes.bool
}