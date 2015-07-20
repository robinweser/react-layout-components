import React from 'react';
import assign from 'object-assign';
import Box from './Box.jsx';

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
			position: 'absolute',
			overflow: 'hidden'
		};
		this.props.overflow && (styles['overflow'] = this.props.overflow);
		this.props.overflowX && (styles['overflowX'] = this.props.overflowX);
		this.props.overflowY && (styles['overflowY'] = this.props.overflowY);
		
		if (this.props.style) {
			styles = assign(styles, this.props.style);
		}
		return <Box {...this.props} style={styles}>{this.props.children}</Box>
	}
}