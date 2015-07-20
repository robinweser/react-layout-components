import React from 'react';
import Flexbox from 'dss-flexbox';
import Prefixer from 'dss-prefixer';
import assign from 'object-assign';

let properties = [
  'justifyContent', 'alignItems', 'alignContent', 'alignSelf', 'flexGrow', 'flexShrink', 'flexBasis', 'order'
];

export default class Box extends React.Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    let styles = {};
    let props = this.props;
    styles['display'] = (props.inline ? 'inline-flex' : 'flex');
    styles['boxSizing'] = 'border-box';

    let direction = (props.reverse ? '-reverse' : '');
    let orientation = (props.column ? 'column' : 'row');
    styles['flexDirection'] = orientation + direction;
    styles['flex'] = (props.flex ? props.flex : '0 1 auto');
    props.wrap && (styles['flexWrap'] = 'wrap');
    props.wrapReverse && (styles['flexWrap'] = 'wrap-reverse');
    let i;
    let length = properties.length;

    for (i = 0; i < length; ++i) {
      let prop = properties[i];
      if (props[prop]) {
        styles[prop] = props[prop];
      }
    }

    Flexbox.process(styles);
    Prefixer.process(styles);

    if (props.style) {
      styles = assign(styles, props.style);
    }

    return <Container style={styles} {...this.props}>{props.children}</Container>;
  }
}