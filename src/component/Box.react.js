var React = require('react');
var Layout = require('../core/layout');
var objectAssign = require('object-assign');

var Box = React.createClass({
    render: function () {
        var props = this.props;
        var vendor = Layout.getVendorPrefix();
        var vendorStyles = {};
        var flex = (props.inline ? 'inline-flex' : 'flex');
        var flexDir = (props.reverse ? '-reverse' : '');
        var flexOrient = (props.column ? 'column' : 'row');

        vendorStyles['display'] = (vendor == 'Webkit' ? '-webkit-' + flex : (vendor == 'ms' ? '-ms-' + flex + 'box' : flex))
        vendorStyles['flexDirection'] = flexOrient + flexDir;

        props.wrap && (vendorStyles['wrap'] = 'wrap');
        props.wrapReverse && (vendorStyles['wrap'] = 'wrapReverse');

        var properties = ['justifyContent', 'alignItems', 'alignContent', 'flexFlow'];

        properties.forEach(function(item){
            props[item] && (vendorStyles[item] = props[item]);
        });

        var styles = Layout.generateStyles(vendorStyles);
        if (props.style){
            styles = objectAssign(styles, props.style);
        }
        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Box;
