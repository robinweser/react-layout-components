var React = require('react');
var Layout = require('../core/Layout');
var objectAssign = require('object-assign');

var Box = React.createClass({
    render: function () {
        var props = this.props;

        var userAgent = navigator.userAgent;
        var android = userAgent.match(/Android\s+([\d\.]+)/);
        var msie = userAgent.match(/MSIE\s+([\d\.]+)/);
        var vendor = Layout.getVendorPrefix();
        var vendorStyles = {};

        var flex = (props.inline ? 'inline-flex' : 'flex');
        var flexDir = (props.reverse ? '-reverse' : '');
        var flexOrient = (props.column ? 'column' : 'row');

        var display;

        if (android) {
            var androidVersion = parseFloat(android[1]);
            if (androidVersion <= 4.4) {
                display = '-webkit-' + (props.inline ? 'inline-' : '') + 'box';

                vendorStyles['WebkitBoxOrient'] = (flexOrient == 'column' ? 'vertical' : 'horizontal');
                vendorStyles['WebkitBoxDirection'] = (props.reverse ? 'reverse' : 'normal');
                if (props.alignItems) {
                    vendorStyles['WebkitBoxAlign'] = props.alignItems.replace('flex-', '');
                };
                if (props.wrap || props.wrapReverse) {
                    vendorStyles['WebkitBoxLines'] = 'multiple';
                };
                if (props.justifyContent) {
                    var boxPack = (props.justifyContent.indexOf('space') ? 'justify' : props.justifyContent.replace('flex-', ''));
                    vendorStyles['WebkitBoxPack'] = boxPack;
                }
            }
        }
        if (msie) {
            var msieVersion = parseInt(msie[1]);
            if (msieVersion == 10) {
                display =  '-ms-' + flex + 'box';
                if (props.alignItems) {
                    vendorStyles['msFlexAlign'] = props.alignItems.replace('flex-', '');
                };
                if (props.justifyContent) {
                    var flexPack = props.justifyContent.replace('flex-', '').replace('space-around', 'distribute').replace('space-between', 'justify');
                    vendorStyles['msFlexPack'] = flexPack;
                }
                if (props.alignContent) {
                    var flexLinePack = props.alignContent.replace('flex-', '').replace('space-around', 'distribute').replace('space-between', 'justify');
                    vendorStyles['msFlexLinePack'] = flexLinePack;
                }

            }
        }
        if (!display) {
            display = (vendor == "Webkit" ? '-webkit-' + flex : flex);
        }

        vendorStyles['display'] = display;
        vendorStyles['flexDirection'] = flexOrient + flexDir;

        props.wrap && (vendorStyles['wrap'] = 'wrap');
        props.wrapReverse && (vendorStyles['wrap'] = 'wrapReverse');

        var properties = ['justifyContent', 'alignItems', 'alignContent', 'flexFlow'];

        properties.forEach(function (item) {
            props[item] && (vendorStyles[item] = props[item]);
        });

        var styles = Layout.generateStyles(vendorStyles);

        if (props.style) {
            styles = objectAssign(styles, props.style);
        }
        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Box;
