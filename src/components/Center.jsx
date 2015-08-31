import React, {Component} from 'react';
import Box from './Box';

export default class Center extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		console.warn("The Center-Component is deprecated and will be removed with the coming 1.0 release. Use `<Box center></Box>` instead.");
		return <Box {...this.props} center>{this.props.children}</Box>
	}
}