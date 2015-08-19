import React from 'react';
import Box from './Box';

export default class Fit extends React.Component {
	constructor() {
		super(...arguments);
	}
	
	render() {
		console.warn("The Fit-Component is deprecated and will be removed with the coming 1.0 release. Use `<Box fit></Box>` instead.");
		return <Box {...this.props} width="100%" height="100%">{this.props.children}</Box>
	}
}