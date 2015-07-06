import React from 'react';
import objectAssign from 'object-assign';

export default class Fit extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
    let styles = {
      width: '100%',
      height: '100%'
    };

    if (this.props.style) {
      styles = objectAssign(styles, this.props.style);
    }
		return <div {...this.props} style={styles}>{this.props.children}</div>
	}
}