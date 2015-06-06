var React = require('react');
var Layout = require('../core/Layout');
var objectAssign = require('object-assign');

var Fit = React.createClass({
    render: function () {
        var props = this.props;

        var styles = {
            height: '100%',
            width: '100%'
        }
        if (props.style){
            styles = objectAssign(styles, props.style);
        }

        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Fit;
