var React = require('react');
var Layout = require('../core/layout');
var objectAssign = require('object-assign');

var Item = React.createClass({
    render: function () {
        var props = this.props;
        var vendorStyles = {};
        props.flex && (vendorStyles['flex'] = (props.flex ? props.flex : '0 1 auto'));

        var properties = ['flexBasis', 'flexGrow', 'flexShrink', 'order', 'alignSelf'];

        properties.forEach(function (item){
            props[item] && (vendorStyles[item] = props[item]);
        });

        var styles = Layout.generateStyles(vendorStyles);
        if (props.style){
            styles = objectAssign(styles, props.style);
        }
        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Item;
