import React, {Component} from 'react';
import Box from './Box';

export default class Fit extends Component {
	constructor() {
		super(...arguments);
	}
	
	render() {
		console.warn("The Fit-Component is deprecated and will be removed with the coming 1.0 release. Use `<Box fit></Box>` instead.");
		return <Box {...this.props} fit>{this.props.children}</Box>
	}
}