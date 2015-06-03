var React = require('react');
var objectAssign = require('object-assign');

var Fit = React.createClass({
    render: function () {
        var props = this.props;
        var styles = {
            height: '100%',
            width: '100%'
        };
        if (props.style) {
            objectAssign(styles, props.style)
        }
        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Fit;
