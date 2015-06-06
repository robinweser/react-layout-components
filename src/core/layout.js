var Layout = {
    options: {
        'webkit': ['appearance', 'userSelect', 'alignContent', 'alignItems', 'alignSelf', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexFlow', 'flexShrink', 'flexWrap', 'justifyContent', 'order', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'transform', 'transformOrigin', 'transformStyle', 'animation', 'animationDelay', 'animationDirection', 'animationFillMode', 'animationDuration', 'anmationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'backfaceVisibility', 'calc'],
        'ms': ['userSelect', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexFlow', 'flexShrink', 'flexWrap', 'transform', 'transformOrigin', 'transformStyle'],
        'moz': ['appearance', 'userSelect', 'boxSizing'],
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
    generateStyles: function(styles, options) {
        var vendor = this.getVendorPrefix();
        var opts = this.options[vendor.toLowerCase()];

        var style;
        for (style in styles) {
            if (style.indexOf('@media') > -1 && !options.ignoreMediaQueries) {
                var query = this.parseMediaQuery(style);
                if (eval(query)) {
                    for (alternativeStyle in styles[style]) {
                        if (opts.indexOf(alternativeStyle) > -1) {
                            styles[this.getVendorStyle(vendor, alternativeStyle)] = styles[style][alternativeStyle];
                        }
                        styles[alternativeStyle] = styles[style][alternativeStyle];
                    }
                }
            } else {
                if (opts.indexOf(style) > -1) {
                    styles[this.getVendorStyle(vendor, style)] = styles[style];
                }
            }
        }
        return styles;
    },
    createStylesheet: function(styles, options) {
        var i;

        if (!options.ignoreMediaQueries) {
            if (!options.width) {
                options.width = window.innerWidth;
            }
            if (!options.height) {
                options.height = window.innerHeight;
            }
        }
        for (i in styles) {
            styles[i] = this.generateStyles(styles[i], options);
        }
        return styles;
    },
    parseMediaQuery: function(query) {
        return query.replace(/@media/g, '').replace(/and/g, '&&').replace(/or/g, '||').replace(/width/g, 'options.width').replace(/height/g, 'options.height');
    },
};

module.exports = Layout;
