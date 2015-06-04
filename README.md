![Obscene Logo](https://raw.githubusercontent.com/unverschaemt/Obscene-UI/gh-pages/res/obscene.png)
**Obscene Layout** is a small [React.js](https://facebook.github.io/react/) layouting library using flexbox.   
It is implemented based on [Obscene Core](https://github.com/unverschaemt/Obscene-Core) flexbox mixins.

## About
There are quite many React implementations of Flexbox out there, but most of them forgot about browser support and vendor prefixes or only support a subset of features the flexbox specifications provide.   
This implementation is based on [Flexy Boxes](http://the-echoplex.net/flexyboxes/) according browser support and vendor prefixes.   
Default values were taken from [Guide to Flexbox  (css-tricks.com)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

> **Warning**: If you've never used flexbox before please be sure to check both links above to properly understand it.

## Usage
Install via `npm`. Use `-save` if you'd like to add it to your *package.json*.   
```sh
npm install obscene-layout
```
    
  
Now you can *require* it within your React code.
```javascript
var ObsceneLayout = require('obscene-layout');
var Box = ObsceneLayout.Box;
var Item = ObsceneLayout.Item;
```
## Example
You can check the layout example/tests using the following:
```sh
cd path/to/project
sudo npm install
npm start
```

## Props
> Please note that all styles are set with full browser support and all `-webkit-` and `-ms-` vendor prefixes.

###Container
#### Defaults
```CSS
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: stretch;
align-content: stretch;
display: flex;
```
#### inline
Sets `display: inline-flex`

#### column
Sets `flex-direction: column`   

#### reverse
Sets `flex-direction: row-reverse` or if `props.column` to `flex-direction: column-reverse`

#### wrap
Sets `flex-wrap: wrap`

#### wrapReverse
Sets `flex-wrap: wrap-reverse`

#### flexFlow
Sets `flex-flow` which is a shortcut for `flex-direction flex-wrap`

#### justifyContent
Sets `justify-content`   
Allows `center, space-around, space-between, flex-start, flex-end`

#### alignItems
Sets `align-items`   
Allows `center, baseline, stretch, flex-start, flex-end`

#### alignContent
Sets `alignContent`    
Allows `center, stretch, space-around, space-between, flex-start, flex-end`
    
    
    
### Item
#### Defaults
```CSS
flex: 0 1 auto;
align-self: auto;
```

#### flex 
Sets `flex` which is a shortcut for `flex-grow flex-shrink flex-basis`

#### flex-grow
Sets `flex-grow` which **must** be positive integer

#### flex-shrink
Sets `flex-shrink` which **must** be positive integer

#### flex-basis
Sets `flex-basis` which is the basis size before additional space is distributed    
`0`: no extra space will be included   
`auto`: extra space will be distributed based on its `flex-grow`

## Repositories
* [Obscene UI (Sass Template for custom app themes)](http://unverschaemt.github.io/Obscene-UI)
* [Obscene Core (Layout Core behind Obscene UI)](https://github.com/unverschaemt/Obscene-Core)
* [Obscene (React UI Library)](https://github.com/unverschaemt/Obscene)

## License
Obscene including all repositories listed above is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Contributing
Feel free to contribute.   
Created with &hearts; by [@rofrischmann](http://rofrischmann.de) at [Unverschämt](http://unverschaemt.net).
