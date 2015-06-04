var React = require('react');
var Layout = require('../src/components.js');
var Box = Layout.Box;
var Page = Layout.Page;
var Item = Layout.Item;
var Bla = Layout.Bla;
var LayoutTest = React.createClass({
    render: function () {
        var styles = {
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
                "color": "white"
            },
            page: {
                backgroundColor: "blue"
            }
        };
        return (
            <Page style={styles.page}>
                <Box alignItems="center" flexDirection="column" justifyContent="center" style={styles.box} wrap="nowrap">
                    <Item style={styles.item}>ASD</Item>
                    <Item alignSelf="flex-start" style={styles.item}>AS</Item>
                    <Item alignSelf="flex-end" style={styles.item}>SAD</Item>
                </Box>
            </Page>
        );
    }
});

module.exports = LayoutTest;
