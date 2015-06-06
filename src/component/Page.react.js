var React = require('react');
var objectAssign = require('object-assign');

var Page = React.createClass({
    render: function () {
        var props = this.props;

        var styles = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                position: 'absolute'
        };

        if (props.style){
            styles = objectAssign(styles, props.style);
        }

        return <div {...props} style={styles}>{props.children}</div>;
    }
});

module.exports = Page;
