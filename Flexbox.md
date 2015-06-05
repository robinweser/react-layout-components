# About
    
This implementation is based on [Flexy Boxes](http://the-echoplex.net/flexyboxes/) according browser support and vendor prefixes.      
Default values were taken from [Guide to Flexbox  (css-tricks.com)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).    

> **Warning**: If you've never used flexbox before please be sure to check both links above to properly understand it.

# Props

##Container
### Defaults
```CSS
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: stretch;
align-content: stretch;
display: flex;
```
### inline
Sets `display: inline-flex`

### column
Sets `flex-direction: column`   

### reverse
Sets `flex-direction: row-reverse` or if `props.column` to `flex-direction: column-reverse`

### wrap
Sets `flex-wrap: wrap`

### wrapReverse
Sets `flex-wrap: wrap-reverse`

### flexFlow
Sets `flex-flow` which is a shortcut for `flex-direction flex-wrap`

### justifyContent
Sets `justify-content`   
Allows `center, space-around, space-between, flex-start, flex-end`

### alignItems
Sets `align-items`   
Allows `center, baseline, stretch, flex-start, flex-end`

### alignContent
Sets `alignContent`    
Allows `center, stretch, space-around, space-between, flex-start, flex-end`
    
    
    
## Item
### Defaults
```CSS
flex: 0 1 auto;
align-self: auto;
```

### flex 
Sets `flex` which is a shortcut for `flex-grow flex-shrink flex-basis`

### flex-grow
Sets `flex-grow` which **must** be positive integer

### flex-shrink
Sets `flex-shrink` which **must** be positive integer

### flex-basis
Sets `flex-basis` which is the basis size before additional space is distributed    
`0`: no extra space will be included   
`auto`: extra space will be distributed based on its `flex-grow`
