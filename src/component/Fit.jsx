import React from 'react';
import Box from './Box.jsx';

export default class Fit extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return <Box {...this.props} width="100%" height="100%">{this.props.children}</Box>
	}
}