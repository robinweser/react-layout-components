![Obscene Logo](https://raw.githubusercontent.com/unverschaemt/Obscene-UI/gh-pages/res/obscene.png)
**Obscene Layout** is a small [React.js](https://facebook.github.io/react/) layouting library based on flexbox. It handles everything relating vendor prefixing. By now it does **NOT** handle mising browser features. Please use [Modernizr](http://modernizr.com) with Polyfills to achieve that.

> Warning: Since we already passed the original scope of just supporting flexbox, Obscene Layout will soon be split into 2 different repositories.    
> **Obscene Styling**: which packs all stylesheet functionalities    
> **Obscene Layout**: which packs all [layouting components](README.md#components) e.g. flexbox

## About
There are plenty of Styling Tools for React as well as implementations of Flexbox out there, but none of those we checked out by now came close to what we were searching for: full vendor-prefixing, flexbox (also old specs), media queries, :pseudo-classes.     
Everything **without** additional CSS files or `<style></style>`-tags.    
Information according the need of vendor prefixes were taken from [Richard Bradshaw's Guide](http://css3.bradshawenterprises.com/which-vendor-prefixes-are-needed/) and [CanIUse](http://caniuse.com/).
    
    
For further information about Flexbox check [Flexbox.md](Flexbox.md).

## Benefit / Roadmap
- [x] automated vendor-prefixing
- [x] flexbox (all specs)
- [x] media queries (**javascript-only**, no CSS at all!)
- [ ] :pseudo-classes `:hover`, `:focus`, `:active`, `:checked`, `:disabled` & `:enabled`
- [ ] CSS-export for non-React use

## Usage
Install via `npm`. Use `-save` if you'd like to add it to your *package.json*.
```sh
npm install obscene-layout
```


Now you can *require* it within your React code.
```javascript
var ObsceneLayout = require('obscene-layout');
var Layout = ObsceneLayout.Layout;
```

### Layout.createStylesheet(styles [, options])
Use this function to define your styles.    
It adds vendor prefixes if needed and resolves `@media` queries. 
This is much like you would define a stylesheet in [React Native](https://facebook.github.io/react-native/) too. e.g.
> Note: We will add a detailed guide on how to use our media queries since they differ a bit of what you might know from CSS.

```javascript
var styles = Layout.createStylesheet({
	header : {
		color: '#fff',
		padding: 20,
		fontSize : 12,
		'@media (height > 300) and (width > 800)' : {
			color: 'black',
			fontSize: 20
		}
	},
	box : {
		boxSizing: 'border-box',
		backgroundColor : 'blue'
	}
});

return <Box style={styles.box}>Text in Box</Box>
```
####options (optional)
Use them if you want to pass e.g. a fixed size or ignore media queries. 
If not set, width & height will use `window.innerWidth` & `window.innerHeight`.    
Same goes with deviceWidth & deviceHeight which will use `window.outerWidth` & `window.outerHeight`.
There will be a blog post about why we think this method for media query probably is the best.
```javascript
{
	width: 800, // 800px width is used to match the media queries
	ignoreMediaQueries : false
}
```
See [Layout Test](test/LayoutTest.react.js) on how to use dynamic sizes.    
    
## Components
Obscene Layout does not only ship the Layout functions but also comes with some preset components to help creating layouts faster and more reliable.
> Note that you may pass any valid prop since all components completely hand them on the inner DOM element. But take care if doing so since you may pass style values that could be overwritten.

### Flexbox Components (Box, Item)
For detail information see [Flexbox.md](Flexbox.md)

### Page
A fullscreen component, that always fills the screen.     
I recommend using `overflowX: hidden, overflowY: auto|scroll` to display long content.

### Center
This element totally centers it's child elements.     
It is an extended [Box](Flexbox.md#box) element.

### Fit
This element always fits its parent's size.

## Tests / Examples
> Note that examples are still in progress since the main focus lays on finishing the roadmap first.
This repository comes with a set of tests which also serve as examples. Check the `/test` directory for more information. Run the using
```sh
cd path/to/project
sudo npm install 
npm start
open /test/index.html
```	

## Repositories
* [Obscene UI (Sass Template for custom app themes)](http://unverschaemt.github.io/Obscene-UI)
* [[Sass] Obscene Core (Layouting styles/mixins with flexbox support)](https://github.com/unverschaemt/Obscene-Core)
* [Obscene (React UI Library)](https://github.com/unverschaemt/Obscene)

## License
Obscene including all repositories listed above is licensed under the [MIT License](http://opensource.org/licenses/MIT).    
Created with &hearts; by [@rofrischmann](http://rofrischmann.de) at [Unverschämt](http://unverschaemt.net).

## Contributing
Feel free to contribute.
