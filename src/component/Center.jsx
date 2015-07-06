import React from 'react';
import Box from './Box.jsx';

export default class Center extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Box {...this.props} alignItems="center" justifyContent="center">{this.props.children}</Box>
	}
}