var React = require('react');
var objectAssign = require('object-assign');
var Box = require('./Box.react');

var Center = React.createClass({
    render: function () {
        var props = this.props;
        return <Box {...props} alignItems={'center'} justifyContent={'center'}>{props.children}</Box>;
    }
});

module.exports = Center;
