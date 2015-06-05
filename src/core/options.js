module.exports = {
    'webkit': {
        prefix: ['alignContent', 'alignItems', 'alignSelf', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexFlow', 'flexShrink', 'flexWrap', 'justifyContent', 'order'],
        equivalent: {
            value: [],
            property: []
        }
    },
    'ms': {
        prefix: ['alignItems', 'alignSelf', 'alignContent', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexFlow', 'flexShrink', 'flexWrap', 'justifyContent', 'order'],
        equivalent: {
            value: ['flex-end', 'flex-start', 'space-between', 'space-around'],
            property: ['alignContent', 'alignItems', 'alignSelf', 'justifyContent']
        }
    },
    'moz': {
        prefix: [],
        equivalent: {
            value: [],
            property: []
        }
    },
    'o': {
        prefix: [],
        equivalent: {
            value: [],
            porperty: []
        }
    }
}
