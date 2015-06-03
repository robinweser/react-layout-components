var React = require('react');
var objectAssign = require('object-assign');
var FlexLayout = require('./flexlayout');

var Item = React.createClass({
    render: function () {
        var props = this.props;
        var vendorStyles = [];
        var styles = {};
        styles = objectAssign(styles, FlexLayout.flex('1 0 auto'));
        props.flex && vendorStyles.push(FlexLayout.flex(props.flex));
        props.flexBasis && vendorStyles.push(FlexLayout.flexBasis(props.flexBasis));
        props.flexGrow && vendorStyles.push(FlexLayout.flexGrow(props.flexGrow));
        props.flexShrink && vendorStyles.push(FlexLayout.flexShrink(props.flexShrink));
        props.flexOrder && vendorStyles.push(FlexLayout.flexOrder(props.flexOrder));
        props.alignSelf && vendorStyles.push(FlexLayout.alignSelf(props.alignSelf));

        vendorStyles.forEach(function (item) {
            styles = objectAssign(styles, item);
        });
        if (props.style) {
            styles = objectAssign(styles, props.style);
        }
        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Item;
