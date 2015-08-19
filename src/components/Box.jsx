import React from 'react';
import Prefixer from 'inline-style-prefixer';

let flexProps = [
  'justifyContent', 'alignItems', 'alignContent', 'alignSelf', 'flexGrow', 'flexShrink', 'flexBasis', 'order'
];

export default class Box extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    let props = this.props;
    let styles = {
      display : (props.inline ? 'inline-flex' : 'flex'),
      flex: (props.flex ? props.flex : '0 1 auto'),
      flexDirection : (props.column ? 'column' : 'row') + (props.reverse ? '-reverse' : '')
    };
    if (props.wrap) {
      styles.flexWrap = 'wrap' + (props.wrap == 'reverse' ? '-reverse' + '');
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
    
    flexProps.forEach(property => {
      if (props.hasOwnProperty(property)){
        styles[property] = props[property];
      }
    });
    
    Prefixer.process(styles);
    
    return <div {...this.props} style={styles}>{props.children}</div>;
  }
}