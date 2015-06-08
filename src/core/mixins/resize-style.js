var ResizeStyleMixin = {
    handleResize: function(e) {
        this.forceUpdate();
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    }
}

module.exports = ResizeStyleMixin;
