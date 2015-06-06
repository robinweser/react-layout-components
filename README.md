![Obscene Logo](https://raw.githubusercontent.com/unverschaemt/Obscene-UI/gh-pages/res/obscene.png)
**Obscene Layout** is a small [React.js](https://facebook.github.io/react/) layouting library based on flexbox. It handles everything relating vendor prefixing. By now it does **NOT** handle mising browser features. Please use [Modernizr](http://modernizr.com) with Polyfills to achieve that.

## About
There are plenty of Styling Tools for React as well as implementations of Flexbox out there, but none of those we checked out by now came close to what we were searching for: full vendor-prefixing, flexbox (also old specs), media queries, :pseudo-classes.     
Everything **without** additional CSS files or `<style></style>`-tags.    
Information according the need of vendor prefixes were taken from [Richard Bradshaw's Guide](http://css3.bradshawenterprises.com/which-vendor-prefixes-are-needed/) and [CanIUse](http://caniuse.com/).
    
    
For further information about Flexbox check [Flexbox.md](Flexbox.md).

## Benefit / Roadmap
- [x] automated vendor-prefixing
- [x] flexbox (all specs)
- [x] media queries (**javascript-only**, no CSS at all!)
- [ ] :pseudo-classes such as `:hover`, `:focus`, `:active`
- [ ] color tools such as **lighten**, **darken** or **alpha**

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
Use this if you want to create a whole stylesheet. 
It adds vendor prefixes if needed and resolves `@media` queries.
This is much like you would define a stylesheet in [React Native](https://facebook.github.io/react-native/) too. e.g.
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
```
####options (optional)
Use them if you want to pass e.g. dynamic size or ignore media queries. 
```javascript
{
	width: 800, // 800px width is used to match the media queries
	height: DYNAMIC_VALUE, // e.g. this.state.windowHeight which updates on window.resize (see example to understand)
	ignoreMediaQueries : false
}
```
See [Layout Test](test/LayoutTest.react.js) on how to use dynamic sizes.    
You may then refer to your styles like this 
```javascript
<Box style={styles.box}>
	Text in Box
</Box>
```


## Tests / Examples
This repository comes with a set of tests which also serve as examples. Check the `/test` directory for more information. Run the using
```sh
cd path/to/project
sudo npm install 
npm start
open /test/index.html
```		
    
## Props
> Note that you may pass any valid prop since all components completely hand them on the inner DOM element. But take care if doing so since you may pass style values that could be overwritten.

### Flexbox
For detail information see [Flexbox props](Flexbox.md#props)

## Repositories
* [Obscene UI (Sass Template for custom app themes)](http://unverschaemt.github.io/Obscene-UI)
* [Obscene Core (Layout Core behind Obscene UI)](https://github.com/unverschaemt/Obscene-Core)
* [Obscene (React UI Library)](https://github.com/unverschaemt/Obscene)

## License
Obscene including all repositories listed above is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Contributing
Feel free to contribute.    
Created with &hearts; by [@rofrischmann](http://rofrischmann.de) at [Unverschämt](http://unverschaemt.net).
