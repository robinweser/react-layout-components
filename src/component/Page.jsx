import React from 'react';
import objectAssign from 'object-assign';

export default class Page extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let styles = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			position: 'absolute'
		};
		this.props.overflow && (styles['overflow'] = this.props.overflow);
		this.props.overflowX && (styles['overflowX'] = this.props.overflowX);
		this.props.overflowY && (styles['overflowY'] = this.props.overflowY);
		
		if (this.props.style) {
			styles = objectAssign(styles, this.props.style);
		}
		return <div {...this.props} style={styles}>{this.props.children}</div>
	}
}