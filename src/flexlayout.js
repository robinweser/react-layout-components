var FlexLayout = {
    msEquivalent: {
        property: {
            'alignSelf': 'flexItemAlign',
            'alignItems': 'flexAlign',
            'alignContent': 'flexLinePack',
            'justifyContent': 'flexPack',
        },
        value: {
            'space-between': 'justify',
            'space-around': 'distribute',
            'flex-start': 'start',
            'flex-end': 'end'
        }
    },
    caplitalizeString: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getMsEquivalent: function(string, type) {
        return (string in this.msEquivalent[type] ? this.msEquivalent[type][string] : string);
    },
    getVendorPrefix: function() {
        var ua = navigator.userAgent.toLowerCase(),
            match = /opera/.exec(ua) || /msie/.exec(ua) || /firefox/.exec(ua) || /(chrome|safari)/.exec(ua),
            vendors = {
                firefox: 'moz',
                chrome: 'webkit',
                safari: 'webkit',
                opera: 'o',
                msie: 'ms'
            };

        return vendors[match[0]];
    },
    getVendorStyle: function(style, value) {
        var styles = {};
        styles[style] = value;

        styles['Webkit' + this.caplitalizeString(style)] = value;
        styles['ms' + this.caplitalizeString(this.getMsEquivalent(style, 'property'))] = this.getMsEquivalent(value, 'value');
        return styles;
    },
    //container
    alignItems: function(value) {
        return this.getVendorStyle('alignItems', value);
    },
    alignContent: function(value) {
        return this.getVendorStyle('alignContent', value);
    },
    justifyContent: function(value) {
        return this.getVendorStyle('justifyContent', value);
    },
    flexDirection: function(value) {
        return this.getVendorStyle('flexDirection', value);
    },
    flexflow: function(value) {
        return this.getVendorStyle('flexFlow', value);
    },

    //item
    alignSelf: function(value) {
        return this.getVendorStyle('alignSelf', value);
    },
    flex: function(value) {
        return this.getVendorStyle('flex', value);
    },
    flexShrink: function(value) {
        return this.getVendorStyle('flexShrink', value);
    },
    flexGrow: function(value) {
        return this.getVendorStyle('flexGrow', value);
    },
    flexBasis: function(value) {
        return this.getVendorStyle('flexBasis', value);
    },
    order: function(value) {
        return this.getVendorStyle('order', value);
    },
    wrap: function(value) {
        return this.getVendorStyle('flexWrap', value);
    }
};

module.exports = FlexLayout;
