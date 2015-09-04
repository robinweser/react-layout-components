# React Layout Components
```sh
npm install react-layout-components
```
Provides an universal layout component for [React.js](https://facebook.github.io/react/).<br>
There will soon also be some predefined common layouts which then can be added separately by including `react-layout-components/layouts`. <br>

The basis `Box` Component is highly inspired by [React Native](https://facebook.github.io/react-native/)'s [Flexbox](https://facebook.github.io/react-native/docs/flexbox.html#content) implementation and though accepts almost the same props.
<br>
It supports all flexbox specifications and automatically adds alternative values and prefixes thanks to [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) if needed.

> **Note**: If you're not familiar with Flexbox at all, I recommend [css-tricks 'Complete Guide to Flexbox'](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) which is an awesome source for beginners as well as a nice refreshment for experts.

# Box
Box is an universal container component based on flexbox.<br>
You can most likely use this Component for **everything** as is helps recreating almost any possible layout.

```javascript
import React from 'react';
import Box from 'react-layout-components';

export class Example extends React.Component {
  render(){
    return (
      //This acts as some kind of container
      <Box width={300} height={500} overflowY='scroll' borderWidth={10} borderTop>
        <Box padding={5}>
          //This acts as an actual flexbox container
          <Box row justifyContent="center" alignItems="flex-start">
            <Box flex={3}>Box2</Box>
            //You can also pass string values instead of numbers
            <Box flex="1" alignSelf="baseline">Box1</Box>
          </Box>
        </Box>
        
        //This turns out to be an absolute positioned, fixed box
        <Box fixed top={10} left={50} minHeight={400}>Box3</Box>
      </Box>
    )
  }
}
```

## Props
Box comes with a lot of configuration abilities. There are basically 3 groups of properties.

> Note that you may pass any valid prop since `Box` completely hands them directly to inner Components, but take care if doing so since you may pass style values that could overwrite layout props.

### [Box-model](https://css-tricks.com/the-css-box-model/)
Box accepts any box model property known from CSS.
* **Padding**: `padding` (shortcut), `paddingLeft`, `paddingTop`, `paddingRight`, `paddingBottom`
* **Margin**: `margin` (shortcut), `marginLeft`, `marginTop`, `marginRight`, `marginBottom`
* **Border**: `border` (shortcut), `borderColor`, `borderWidth`, `borderStyle`, `borderTop`, `borderLeft`, `borderBottom`, `borderRight`
* **Size**: `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
* **Flow**: `overflow`, `overflowX`, `overflowY`
* **Position**: `top`, `left`, `bottom`, `right`

You may also set `boxSizing` which defines how the size of a box is calculated. You may use `border-box`, `content-box` or `padding-box`.

#### Shortcuts
There are some shortcut properties. They do not accept a value. e.g.
`<Box fixed></Box>`.

| Property     | Description                                    |
| ------------ | ---------------------------------------------- |
| fixed        | `position:fixed`                               |
| absolute     | `position:absolute`                            |
| borderTop    | Adds a border at the top with `borderWidth`    |
| borderLeft   | Adds a border to the left with `borderWidth`   |
| borderRight  | Adds a border to the right with `borderWidth`  |
| borderBottom | Adds a border at the bottom with `borderWidth` |

### [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
Browser default values don't need to be set explicit and are defined as
```CSS
{
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  flex-wrap: nowrap;
}
```
| Property       | Description              | Options                                                             |
| -------------- | ------------------------ | ------------------------------------------------------------------- |
| flex           |                          | `flex-grow flex-shrink flex-basis`                                  |
| flexGrow       |                          | positive integer >= 0                                               |
| flexShrink     |                          | positive integer >= 0                                               |
| flexBasis      | base size                | size value, `auto`                                                  | 
| order          | item order               |                                                                     |
| inline         | `display: inline-flex`   | shortcut                                                            | 
| column         | `flex-direction: column` | shortcut                                                            | 
| reverse        | reverse `flex-direction` | shortcut                                                            | 
| wrap           | `flex-wrap: wrap`        | shortcut, `wrap-reverse`                                            | 
| flow           | `row norwap`             | `flex-direction flex-wrap`                                          |  
| alignContent   | line-content align       | `center`, `flex-start`, `flex-end`, `space-around`, `space-between` |
| justifyContent | main-axis align          | `center`, `flex-start`, `flex-end`, `space-around`, `space-between` |
| alignItems     | cross-axis align         | `center`, `flex-start`, `flex-end`, `baseline`, `stretch`           |
| alignSelf      | item self align          | `center`, `flex-start`, `flex-end`, `baseline`, `stretch`           |

#### Shortcuts
There also are some flexbox shortcuts which don't accept a value.

| Property     | Description                                      |
| ------------ | ------------------------------------------------ |
| fit          | `width: 100%; height: 100%`                      |
| center       | `justify-content: center; align-items: center`   |


# License
react-layout-components is licensed under the [MIT License](http://opensource.org/licenses/MIT).    
Created with &hearts; by [@rofrischmann](http://rofrischmann.de).
