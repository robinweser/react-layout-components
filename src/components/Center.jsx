import React from 'react';
import Box from './Box.jsx';

export default class Center extends React.Component {
	constructor() {
		super(...arguments);
	}
	render() {
		console.warn("The Center-Component is deprecated and will be removed with the coming 1.0 release. Use `<Box center></Box>` instead.");
		return <Box {...this.props} alignItems="center" justifyContent="center">{this.props.children}</Box>
	}
}