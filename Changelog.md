# Changelog

## 3.0
## 3.0.0
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
