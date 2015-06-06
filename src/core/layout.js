var Layout = {
    options: {
        'webkit': ['alignContent', 'alignItems', 'alignSelf', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexFlow', 'flexShrink', 'flexWrap', 'justifyContent', 'order', 'transition', 'transform', 'animation', 'calc'],
        'ms': ['flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexFlow', 'flexShrink', 'flexWrap', 'transform'],
        'moz': ['boxSizing'],
        'o': []
    },
    caplitalizeString: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getEquivalent: function(string, type) {
        return this.equivalent[type][string];
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
        return vendor + this.caplitalizeString(style);
    },
    generateStyles: function(styles) {
        var vendor = this.getVendorPrefix();
        var opts = this.options[vendor.toLowerCase()];

        var style;
        for (style in styles) {
            if (opts.indexOf(style) > -1) {
                styles[this.getVendorStyle(vendor, style)] = styles[style];
            }
        }
        return styles;
    },
    createStylesheet: function(styles) {
        var i;
        for (i in styles) {
            styles[i] = this.generateStyles(styles[i]);
        }
        return styles;
    }
};

module.exports = Layout;
