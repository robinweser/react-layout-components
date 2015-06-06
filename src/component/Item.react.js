var React = require('react');
var Layout = require('../core/Layout');
var objectAssign = require('object-assign');

var Item = React.createClass({
    render: function () {
        var props = this.props;

        var userAgent = navigator.userAgent;
        var android = userAgent.match(/Android\s+([\d\.]+)/);
        var msie = userAgent.match(/MSIE\s+([\d\.]+)/);
        var vendor = Layout.getVendorPrefix();
        var vendorStyles = {};

        if (android) {
            var androidVersion = parseFloat(android[1]);
            if (androidVersion <= 4.4) {
                vendorStyles['WebkitBoxFlex'] = (props.flex ? props.flex.split(' ')[0] : '0.0');
                if (props.order) {
                    vendorStyles['WebkitBoxOrdinalGroup'] = props.order + 1;
                }
            }
        }
        if (msie) {
            var msieVersion = parseInt(msie[1]);
            if (msieVersion == 10) {
                if (props.order) {
                    vendorStyles['msFlexOrder'] = props.order;
                }
                if (props.alignSelf) {
                    vendorStyles['msFlexItemAlign'] = props.alignSelf.replace('flex-', '');
                }
            }
        }

        vendorStyles['flex'] = (props.flex ? props.flex : '0 1 auto');

        var properties = ['flexBasis', 'flexGrow', 'flexShrink', 'order', 'alignSelf'];

        properties.forEach(function (item) {
            props[item] && (vendorStyles[item] = props[item]);
        });

        var styles = Layout.generateStyles(vendorStyles);

        if (props.style) {
            styles = objectAssign(styles, props.style);
        }
        return <div  {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Item;
