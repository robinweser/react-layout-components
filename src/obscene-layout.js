var Box = require('./component/Box.react');
var Item = require('./component/Item.react');
var Fit = require('./component/Fit.react');
var Page = require('./component/Page.react');
var Center = require('./component/Center.react');
var Layout = require('./core/layout');

var HoverStyleMixin = require('./core/mixins/hover-style.js');
var ResizeStyleMixin = require('./core/mixins/resize-style.js');

module.exports = {
    Box: Box,
    Item: Item,
    Page: Page,
    Fit: Fit,
    Center : Center,
    Layout: Layout,
    Mixins : {
      HoverStyle : HoverStyleMixin,
      ResizeStyle : ResizeStyleMixin
   }
};
