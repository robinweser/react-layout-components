var React = require('react');
var ObsceneLayout = require('../src/obscene-layout.js');
var Layout = ObsceneLayout.Layout;
var Box = ObsceneLayout.Box;
var Page = ObsceneLayout.Page;
var Item = ObsceneLayout.Item;
var Center = ObsceneLayout.Center;
var Mixins = ObsceneLayout.Mixins;


var LayoutTest = React.createClass({
    mixins: [Mixins.HoverStyle, Mixins.ResizeStyle],

    render: function () {
        var styles = Layout.createStylesheet(stylesheet, {
            hover: this.state.hovered
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
var stylesheet = {
    box: {
        backgroundColor: "blue",
        padding: 20,
        borderColor: "green",
        borderWidth: 1,
        borderStyle: "solid",
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
        width: 800,
        height: 500 
    }
};

module.exports = LayoutTest;
