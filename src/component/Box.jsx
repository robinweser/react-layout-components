import React from 'react';
import Stylesheet from 'obscene-stylesheet';
import Flexbox from 'dss-flexbox';
import Prefixer from 'dss-prefixer';
import objectAssign from 'object-assign';

let properties = [
	'justifyContent', 'alignItems', 'alignContent', 'alignSelf', 'flexGrow', 'flexShrink', 'flexBasis', 'order'
];

export default class Box extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let styles = {};
		let props = this.props;
		styles['display'] = (props.inline ? 'inline-flex' : 'flex');
		styles['boxSizing'] = 'border-box';

		let direction = (props.reverse ? '-reverse' : '');
		let orientation = (props.column ? 'column' : 'row');
		styles['flexDirection'] = orientation + direction;
		styles['flex'] = (props.flex ? props.flex : '0 1 auto');
		props.wrap && (styles['flexWrap'] = 'wrap');
		props.wrapReverse && (styles['flexWrap'] = 'wrap-reverse');

		let i;
		let length = properties.length;

		for (i = 0; i < length; ++i) {
			let prop = properties[i];
			if (props[prop]) {
				styles[prop] = props[prop];
			}
		}

		Flexbox.process(styles);
		Prefixer.process(styles);

		if (props.style) {
			styles = objectAssign(styles, props.style);
		}
		
		return <div {...this.props} className={this.props.className} style={styles}>{props.children}</div>;
	}
}