# React Layout Components
```sh
npm install react-layout-components
```
Provides a set of layout components for  [React.js](https://facebook.github.io/react/) using flexbox. 
It supports all flexbox specifications and automatically adds alternative values if needed.

# Usage
You can use those as you would use any other React Component.
```javascript
import React from 'react';
import Box, {Container, Page} from 'react-layout-components';

export class Example extends React.Component {
  render(){
    return (
      <Page overflowY='scroll' overflowX='hidden'>
        <Container borderWidth="10" borderColor="red" borderTop borderRight padding="10">
          <Box row reverse wrap alignItems='flex-start' justifyContent="space-around">
            <Box flex="3">Box2</Box>
            <Box flex="1" alignSelf="flex-end">Box1</Box>
          </Box>
        </Container>
      </Page>
    )
  }
}
```




# Components
> Note that you may pass any valid prop since all components completely hand them on the inner DOM element. But take care if doing so since you may pass style values that could be overwritten.


## Box
Flexbox component. Use this for any kind of layout that needs flexbox. It can act as a container as well as an item. Box renders into a [Container](#container) which lets you use all Container props as well.

### Props
| Property | Description |Default | Options |
| ------- | ---------|----------|------------|
| inline |`display: inline-flex` |  |  | 
| column |`flex-direction: column` |  |  | 
| reverse |`flex-direction: row-reverse,column-reverse` |  |  | 
| wrap | `flex-wrap: wrap` |  |  | 
| wrapReverse |`flex-wrap: wrap-reverse` ||| 
| flexFlow || `row norwap` | see `flexDirection` & `flexWrap` |  
|justifyContent |   |`flex-start` | `center`, `space-around`, `space-between`, `flex-start`, `flex-end`|
|alignItems || `stretch`| `center`, `baseline`, `stretch`, `flex-start`, `flex-end`|
|alignContent || `stretch`| `center`, `stretch`, `space-around`, `space-between`, `flex-start`, `flex-end`|
|alignSelf | | `stretch`| `center`, `baseline`, `stretch`, `flex-start`, `flex-end`|
|flex |  | `0 1 auto` | `flexGrow flexShrink flexBasis` |
|flexGrow |  | `0`| positive integer |
|flexShrink |  | `1` | positive integer |
|flexBasis | basis size |`auto` | integer 


## Container
A default container component that let's you set all CSS box-modell properties. 
### Props
| Property | Default | Options |
| ------- | ----------|------------|
| width | | Sets components width|
| height | | Sets components height|
| padding |  | CSS valid padding |
| margin |  | CSS valid margin |
| border |  | CSS valid border |
| boxSizing | `border-box` | `border-box`, `content-box`, `padding-box` |
| borderColor | `black` | CSS valid color |
| borderStyle | `solid` | `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset` |
|borderWidth | `1px` |  |
| borderTop |  | Adds a border at the top with `borderWidth` |
| borderLeft |  | Adds a border to the left with `borderWidth` |
| borderRight |  | Adds a border to the right with `borderWidth` |
| borderBottom |  | Adds a border at the bottom with `borderWidth` |

## Page
A fullscreen component, that always fills the screen. Page renders into a [Box](#box) which lets you use all Box props as well.  
### Props
| Property | Default | Options |
| ------- | ----------|------------|
| overflow |  | `hidden`, `scroll`, `auto`  |
| overflowY |  | `hidden`, `scroll`, `auto`  |
| overflowX |  | `hidden`, `scroll`, `auto`  |

I recommend using `overflowX: hidden, overflowY: auto|scroll` to display long content.

## Center
This element totally centers it's child elements.     
Center renders into a [Box](#box) which lets you use all Box props as well. 

## Fit
This element always fits its parent's size.
Fit renders into a [Box](#box) which lets you use all Box props as well. 

# License
react-layout-components is licensed under the [MIT License](http://opensource.org/licenses/MIT).    
Created with &hearts; by [@rofrischmann](http://rofrischmann.de).

## Contributing
Feel free to contribute.
