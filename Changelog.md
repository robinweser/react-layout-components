# Changelog

## 3.0

### 3.0.6
* use `prop-types` instead of `React.PropTypes`

### 3.0.5
* use inline-style-prefixer > 3.0.0
* purified some components

### 3.0.4
* fixed the `Page` exporting
* `Center`, `Flex` and `VBox` are now functional components

### 3.0.2
* added property omitting to `Container`, `ScrollView` and `Page`

### 3.0.1
* added property omitting to prevent warnings in React 15.2
* fixed a bug preventing to set `0` as a property value

### 3.0.0
* Temporary fixed fallback values by adding the CSS class `react-layout-components--box`

## 2.0
### 2.2.0
* Replaced [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer) with lightweight [inline-style-prefix-all](https://github.com/rofrischmann/inline-style-prefix-all)
  * adds server-side rendering support for every Component
* `width` and `height` from `<ScrollView>` now longer are required

### 2.1.2
* fixed shorthand Components

### 2.1.0
* Using classes to enable hot module replacement
* Removed deprecated warnings

### 2.0.2
* `react` and `react-dom` are now `peerDependencies` rather than `dependencies`

### 2.0.1 (hot fix)
* adding `overflow` props

### 2.0.0
* `Container`, `Page`, `ScrollView` Components
* `Box` improvements (using [inline-style-prefixer](https://github.com/rofrischmann/inline-style-prefixer))
* `Center`, `Flex` & `Vbox` shortcut Components

## 1.0
Initial release with just the `Box` Component
