var React = require('react');
var ObsceneLayout = require('../src/obscene-layout.js');
var Layout = ObsceneLayout.Layout;
var Box = ObsceneLayout.Box;
var Page = ObsceneLayout.Page;
var Item = ObsceneLayout.Item;
var Center = ObsceneLayout.Center;

var LayoutTest = React.createClass({
    getInitialState: function () {
        return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
    },

    handleResize: function (e) {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    },
    componentDidMount: function () {
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function () {
        window.removeEventListener('resize', this.handleResize);
    },
    render: function () {
        var styles = Layout.createStylesheet({
            box: {
                backgroundColor: "blue",
                padding: 20,
                borderColor: "green",
                borderWidth: 1,
                borderStyle: "solid",
                '@media (width > 800)': {
                    backgroundColor: "red"
                }
            },
            item: {
                borderColor: "green",
                borderWidth: 1,
                borderStyle: "solid",
                backgroundColor: "green",
                padding: 30,
                color: "white",
                borderRadius: 10
            },
            page: {
                backgroundColor: "blue",
                overflow: 'scroll'
            },
            center: {
                width: 300,
                height: 500,
                '@media (width > 400) and (height > 200)': {
                    fontSize: 50
                }
            }
        }, {
            width: this.state.windowWidth,
            height: this.state.windowHeight
        });
        return (
            <Page style={styles.page}>
                <Center style={styles.center}><Item>Hallo</Item>
                    <Item>Heey</Item></Center>
                <Box alignItems="center" flexDirection="column" justifyContent="space-around" style={styles.box} wrap="nowrap">
                    <Item style={styles.item}>ASD</Item>
                    <Item alignSelf="flex-start" style={styles.item}>AS</Item>
                    <Item alignSelf="flex-end" style={styles.item}>SAD</Item>
                </Box>
            </Page>
        );
    }
});

module.exports = LayoutTest;
