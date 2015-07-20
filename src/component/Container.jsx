import React from 'react';
import assign from 'object-assign';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }
	
  render() {
    let styles = {};
    let props = this.props;
    props.borderColor && (styles['borderColor'] = props.borderColor);
    let width = (props.borderWidth ? parseFloat(props.borderWidth) + 'px ' : '1px ');
    let borderWidth = '';
    let borders = [
      'borderTop', 'borderRight', 'borderBottom', 'borderLeft'
    ];
    borders.forEach(function (item) {
      borderWidth += (props[item] ? width : '0 ');
    });
    if (borderWidth.trim() != '0000') {
      styles['borderWidth'] = borderWidth;
    }
    styles['borderStyle'] = (props.borderStyle ? props.borderStyle : 'solid');
    styles['boxSizing'] = (props.boxSizing ? props.boxSizing : 'border-box');
    props.border && (styles['border'] = props.border);

    props.padding && (styles['padding'] = props.padding);
    props.margin && (styles['margin'] = props.margin);

    props.width && (styles['width'] = props.width);
    props.height && (styles['height'] = props.height);

    if (props.style) {
      styles = assign(styles, props.style);
    }
    return <div style={styles} {...this.props}>{props.children}</div>;
  }
}