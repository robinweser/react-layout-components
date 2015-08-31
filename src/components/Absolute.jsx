import React, {Component, PropTypes} from 'react';
import assign from 'assign-styles';

export default class Absolute extends Component {
	constructor() {
		super(...arguments);
	}
	
	render() {
		let props = this.props;
		let styles = {
			position: 'absolute'
		};
		
		props.fixed && (styles.position = 'fixed');
		props.top && (styles.top = props.top);
		props.right && (styles.right = props.right);
		props.bottom && (styles.bottom = props.bottom);
		props.left && (styles.left = props.left);
		
		if (props.style) {
			styles = assign(styles, props.style);
		};
		return <div {...this.props} style={styles}>{this.props.children}</div>
	}
}

let CSSValues = [PropTypes.string, PropTypes.number];

Absolute.propTypes = {
	top : PropTypes.oneOfType(CSSValues),
	right: PropTypes.oneOfType(CSSValues),
	bottom: PropTypes.oneOfType(CSSValues),
	left: PropTypes.oneOfType(CSSValues),
	fixed: PropTypes.bool
}