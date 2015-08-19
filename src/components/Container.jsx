import React from 'react';
import assign from 'assign-styles';

let boxProps = [
  'width', 'height', 'padding', 'margin', 'boxSizing', 'overflow', 'overflowX', 'overflowY'
];

export default class Container extends React.Component {
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