var React = require('react');
var objectAssign = require('object-assign');
var FlexLayout = require('./flexlayout');

var Box = React.createClass({
    render: function () {
        var props = this.props;
        var vendorStyles = [];
        var vendor = FlexLayout.getVendorPrefix();
        var styles = {
            display: (vendor == 'webkit' ? '-webkit-flex' : (vendor == 'ms' ? '-ms-flexbox' : 'flex'))
        };
        //direction
        var flexDir = (props.reverse ? '-reverse' : '');
        var flexOrient = (props.column ? 'column' : 'row');
        vendorStyles.push(FlexLayout.flexDirection(flexOrient + flexDir));

        props.justifyContent && vendorStyles.push(FlexLayout.justifyContent(props.justifyContent));
        props.alignItems && vendorStyles.push(FlexLayout.alignItems(props.alignItems));
        props.alignContent && vendorStyles.push(FlexLayout.alignContent(props.alignContent));
        props.wrap && vendorStyles.push(FlexLayout.wrap('wrap'));
        props.wrapReverse && vendorStyles.push(FlexLayout.wrap('wrapReverse'));
        props.flexFlow && vendorStyles.push(FlexLayout.flexFlow('flexFlow'));

        vendorStyles.forEach(function(item){
            styles = objectAssign(styles, item);
        });
        if (props.style){
            styles = objectAssign(styles, props.style);
        }
        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Box;
