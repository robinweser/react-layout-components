import React from 'react';

export default class Absolute extends React.Component {
	constructor() {
		super(...arguments);
	}
	
	render() {
		let props = this.props;
		let styles = {
			position: 'absolute'
		};
		
		props.top && (styles.top = props.top);
		props.right && (styles.right = props.right);
		props.bottom && (styles.bottom = props.bottom);
		props.left && (styles.left = props.left);
		
		return <div {...this.props} style={styles}>{this.props.children}</div>
	}
}