# React Layout Components
```sh
npm install react-layout-components
```
Useful, Modern and universal layout Components for [React.js](https://facebook.github.io/react/) based on flexbox.<br>

The basis `<Box>` Component is highly inspired by [React Native](https://facebook.github.io/react-native/)'s [Flexbox](https://facebook.github.io/react-native/docs/flexbox.html#content) implementation and though accepts almost the same props.
It supports all flexbox specifications and automatically adds alternative values and prefixes thanks to [inline-style-prefix-all](https://github.com/rofrischmann/inline-style-prefix-all) if needed.

[![npm downloads](https://img.shields.io/npm/dm/react-layout-components.svg)](https://img.shields.io/npm/dm/react-layout-components.svg)

> **Note**: If you're not familiar with Flexbox at all, I recommend [css-tricks 'Complete Guide to Flexbox'](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) which is an awesome source for beginners as well as a nice refreshment for experts.

# Components
To be able to use any of those Components below, make sure you have added the following CSS class somewhere. Personally I just inline it inside the `<head>` of the `index.html`.
```CSS
.react-layout-components--box {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
```
> **Note**: This is a temporary fix and will hopefully be removed if React merges  https://github.com/facebook/react/pull/6701.

* [Box](#box)
* [Container](#container)
* [Page](#page)
* [ScrollView](#scrollview)

##### Shortcuts

* [VBox](#hbox)
* [Flex](#flex)
* [Center](#center)

## Box
Box is an universal container component based on flexbox.<br>
You can most likely use this Component for **everything** as is helps recreating almost any possible layout.

```javascript
import React from 'react'
import Box from 'react-layout-components'

const Example = () => (
  // This acts as some kind of container
  <Box width={300} height={500}>
      //This acts as an actual flexbox container
      <Box justifyContent="center" alignItems="flex-start">
        <Box flex={3}>Flex 3</Box>
        <Box flex="1 0 auto" alignSelf="baseline">Flex 1</Box>
    </Box>
  </Box>
)
```

### Props
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
| flow           | `row nowrap`             | `flex-direction flex-wrap`                                          |
| alignContent   | line-content align       | `center`, `flex-start`, `flex-end`, `space-around`, `space-between` |
| justifyContent | main-axis align          | `center`, `flex-start`, `flex-end`, `space-around`, `space-between` |
| alignItems     | cross-axis align         | `center`, `flex-start`, `flex-end`, `baseline`, `stretch`           |
| alignSelf      | item self align          | `center`, `flex-start`, `flex-end`, `baseline`, `stretch`           |

##### Shortcuts

| Property     | Description                                      |
| ------------ | ------------------------------------------------ |
| fit          | `width: 100%; height: 100%`                      |
| center       | `justify-content: center; align-items: center`   |

##### Size
Box lets you also define size properties which are `width`, `height`, `minWidth`, `maxWidth`, `minHeight` and `maxHeight`.

##### Defaults
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

## Container
Container is a Component to style [box-model](https://css-tricks.com/the-css-box-model/)
 properties.

### Props

* **Padding**: `padding`, `paddingLeft`, `paddingTop`, `paddingRight`, `paddingBottom`
* **Margin**: `margin`, `marginLeft`, `marginTop`, `marginRight`, `marginBottom`
* **Border**: `border`, `borderColor`, `borderWidth`, `borderStyle`, `borderTop`, `borderLeft`, `borderBottom`, `borderRight`
* **Size**: `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`
* **Position**: `top`, `left`, `bottom`, `right`
* **Flow**: `overflow`, `overflowX`, `overflowY`, `textOverflow`, `whiteSpace`

You may also set `boxSizing` which defines how the size of a box is calculated. You may use `border-box`, `content-box` or `padding-box`.


##### Shortcuts
There are some shortcut properties. They do not accept a value. e.g.
`<Container fixed></Container>`.

| Property     | Description                                    |
| ------------ | ---------------------------------------------- |
| fixed        | `position:fixed`                               |
| absolute     | `position:absolute`                            |
| borderTop    | Adds a border at the top with `borderWidth`    |
| borderLeft   | Adds a border to the left with `borderWidth`   |
| borderRight  | Adds a border to the right with `borderWidth`  |
| borderBottom | Adds a border at the bottom with `borderWidth` |

## Page
Page is just a shortcut for a page-filling Component. It also is fixed to the edges of your WebView.

## ScrollView
ScrollView is a scrollable container. It is build on the `<Box>`-Component, which let's you either use default box-model sizing or flexbox sizing.
### Props

| Property         | Description                             | Options
| ---------------- | --------------------------------------- | -------------------- |
| height           | container height                        |
| width            | container width                         |
| horizontal       | enables horizontal scrollable container | `boolean`
| initialScrollPos | scroll position                         | `number`
| onScroll         | gets fired on scrolling                 | `function`

### Methods
* `getScrollPosition()`<br>
Returns the actual scroll position.

* `scrollTo(scrollPosition)`<br>
Scrolls to the `scrollPosition`.

* `scrollToStart()`<br>
Scrolls to the container start.

* `scrollToEnd()`<br>
Scrolls to the container end.

## Shortcuts
### VBox
`Box` with `flex-direction: column`. (vertical flow)

### Flex
`Box` with `flex: 1 0 auto`.

### Center
`Box` centerering its children with `justify-content: center; align-items: center`.

# Demo
To run the included demo, run the following command: `$ npm run build:demo && open demo/index.html`

# License
react-layout-components is licensed under the [MIT License](http://opensource.org/licenses/MIT).
Created with &hearts; by [@rofrischmann](http://rofrischmann.de).


# Contributing
I would love to see people getting involved.<br>
If you have a feature request please create an issue. Also if you're even improving one of the Components by any kind please don't be shy and send a pull request to let everyone benefit.

### Issues
If you're having any issue please let me know as fast as possible to find a solution a hopefully fix the issue. Try to add as much information as possible such as your environment, exact case, the line of actions to reproduce the issue.

### Pull Requests
If you are creating a pull request, try to use commit messages that are self-explanatory.
