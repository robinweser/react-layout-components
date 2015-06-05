![Obscene Logo](https://raw.githubusercontent.com/unverschaemt/Obscene-UI/gh-pages/res/obscene.png)
**Obscene Layout** is a small [React.js](https://facebook.github.io/react/) layouting library based on flexbox. It handles everything relating vendor prefixing.     
By now it does **NOT** handle mising browser features. Please use [Modernizr](http://modernizr.com) with Polyfills to achieve that.

## About
There are plenty of Styling Tools for React as well as implementations of Flexbox out there, but none of those we checked out by now came close to what we were searching for. Something that handles vendor prefixing and comes with a complete flexbox implementation including both specifications which matter since e.g. Android < 4.4 (which still a lot people use) only supports the old specs.    
Information according the need of vendor prefixes were taken from [Richard Bradshaw's Guide](http://css3.bradshawenterprises.com/which-vendor-prefixes-are-needed/) and [CanIUse](http://caniuse.com/).
    
    
For further information about Flexbox check [Flexbox.md](Flexbox.md).

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

### Layout.createStylesheet
Use this if you want to create a whole stylesheet.     
This is much like you would define a stylesheet in [React Native](https://facebook.github.io/react-native/) too. e.g.
```javascript
var styles = Layout.createStylesheet({
	header : {
		color: '#fff',
		padding: 20,
		fontSize : 12
	},
	box : {
		boxSizing: 'border-box',
		backgroundColor : 'blue'
	}
});
```
You may then refer to your styles like this `<Box style={styles.box}>Text in Box</Box>`. If using Mozilla Firefox this will automatically add `MozBoxSizing : 'border-box'` to your styles since it is recommended to use in this case.    
If you'd like to add vendor prefixes to a given single style object you may use `Layout.generateStyles({STYLES_OBJECT})`;


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
For detail information see [Flexbox props](Flexbox.md#Props)

## Repositories
* [Obscene UI (Sass Template for custom app themes)](http://unverschaemt.github.io/Obscene-UI)
* [Obscene Core (Layout Core behind Obscene UI)](https://github.com/unverschaemt/Obscene-Core)
* [Obscene (React UI Library)](https://github.com/unverschaemt/Obscene)

## License
Obscene including all repositories listed above is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Contributing
Feel free to contribute.   
Created with &hearts; by [@rofrischmann](http://rofrischmann.de) at [Unverschämt](http://unverschaemt.net).
