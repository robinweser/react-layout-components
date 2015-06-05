var React = require('react');
var ObsceneLayout = require('../src/obscene-layout.js');
var Layout = ObsceneLayout.Layout;
var Box = ObsceneLayout.Box;
var Page = ObsceneLayout.Page;
var Item = ObsceneLayout.Item;

var LayoutTest = React.createClass({
    render: function () {
        var styles = Layout.createStylesheet({
            box: {
                backgroundColor: "blue",
                padding: 20,
                borderColor: "green",
                borderWidth: 1,
                borderStyle: "solid"
            },
            item: {
                borderColor: "green",
                borderWidth: 1,
                borderStyle: "solid",
                backgroundColor: "green",
                padding: 30,
                color: "white",
                borderRadius : 10
            },
            page: {
                backgroundColor: "blue"
            }
        });
        return (
            <Page style={styles.page}>
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
