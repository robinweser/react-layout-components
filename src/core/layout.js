var options = require('./options');
var equivalent = require('./equivalent');

var Layout = {
    caplitalizeString: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getEquivalent: function(string, type) {
        return equivalent[type][string];
    },
    getVendorPrefix: function() {
        var userAgent = navigator.userAgent.toLowerCase();
        var vendorPrefixes = {
            firefox: 'Moz',
            chrome: 'Webkit',
            safari: 'Webkit',
            opera: 'O',
            msie: 'ms'
        };
        var browserMatch = userAgent.match('opera') || userAgent.match('msie') || userAgent.match('firefox') || userAgent.match("safari|chrome");
        return vendorPrefixes[browserMatch[0]];
    },
    getVendorStyle: function(vendor, style, equivalent) {
        return vendor + this.caplitalizeString(equivalent > -1 ? this.getEquivalent(style, 'property') : style);
    },
    generateStyles: function(styles) {
        var vendor = this.getVendorPrefix();
        var opts = options[vendor.toLowerCase()];

        var style;
        for (style in styles) {
            if (opts.prefix.indexOf(style) > -1) {
                var value = styles[style];
                styles[this.getVendorStyle(vendor, style, opts.equivalent.property.indexOf(style))] = (opts.equivalent.value.indexOf(value) > -1 ? this.getEquivalent(value, 'value') : value)
            }
        }
        return styles;
    },
    createStylesheet : function(styles){
        var i;
        for (i in styles){
            styles[i] = this.generateStyles(styles[i]);
        }
        return styles;
    }
};

module.exports = Layout;
