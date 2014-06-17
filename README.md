# Magpie
&ldquo;All the best bits of other people&rsquo;s web development libraries&rdquo;

**Magpie** is a compilation of my favourite shiny bits and pieces from other people&rsquo;s excellent frameworks, libraries and utilities, including:

* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [normalize.css](http://necolas.github.io/normalize.css/)
* [Skeleton](http://getskeleton.com) [_optional_]
* [Respond.js](https://github.com/scottjehl/Respond) [_for IE8 and down only_]
* [Head.js](http://headjs.com/)

Additional credit should go to the [Breakpoint Sass](http://breakpoint-sass.com/) team for inspiring the suite of breakpoint helper functions in Magpie, along with Anders Andersen and Tobias Järlund for their [fuss-free approach to media scaling](http://mobile.smashingmagazine.com/2013/09/16/responsive-images-performance-problem-case-study/). Hat tip also to Nathan Crank for his [LESS-based interpretation of RetinaJS](https://github.com/imulus/retinajs/tree/nathancrank-sass), which I've translated into Sass within Magpie.

Thank you, excellent folk!

## Methodology

Magpie is intended to be used as a **mobile-first** framework, progressively adding in tablet and desktop support on top of base mobile styles. The thinking here goes that smaller/weaker/older devices should have the least heavy-lifting to do, with more capable devices and browsers doing additional computation to suit their needs&mdash;depending on how you structure your code within Magpie, naturally.

**Having said that,** web design &amp; development is opinionated, personal, and often entirely bespoke. In this vein, Magpie has been built to be **flexible** and **non-prescriptive**, offering a raft of light, useful helpers, which aim to simplify some of the more repeatative and fiddly tasks you'll encounter during front-end production.

## Useful Functions

### Simple breakpoint handling

Nest the functions `bp-min()`, `bp-max()` and `bp-only()` within your mobile-first Sass rules to quickly and easily create breakpoints for different device resolutions.

As a quick example, the following simply changes the `background` rule for each named device width:

	.myElement {
		background: red;
		
		bp-min($tablet) {
			background: green;
		}
		
		bp-min($desktop) {
			background: blue;
		}
		
	}

In a similar way, you can use `bp-max()` to prevent an element's layout from going beyond a certain breakpoint, while `bp-max()` lets you lock a set of rules to a specific breakpoint only.

**But beware!** Whilst `bp-max()` and `bp-only()` are convenient, they should be used **sparingly** and only in circumstances where you simply can't achieve what you need scaling up from mobile-first styles using `bp-min()` (as shown above).

If you're project is starting to make frequent use of both `bp-max()` and `bp-only()`, you're probably tackling your build in the wrong direction &ndash; i.e. not mobile-first &ndash; and increasing future pain and testing headaches across more and more devices.

_You can find the **default Magpie breakpoints** inside the `./_src/_responsive.scss` Sass partial of your Magpie project. You can easily change these to suit your project, and even add your own!_

## Compiling your Magpie project

Magpie uses [Grunt](http://headjs.com/) to run all the development and build tasks. To install run `npm install`. This will install all the dependencies listed in `package.json`.

Whilst developing, run `grunt watch`. This will watch all the dev files, and run compass and js tasks every time you save a file. It has development settings in place such as source maps and expanded output for css.

When you're ready to deploy your Magpie project to a production environment, use the command. `grunt build`. This includes settings for compressing JS and CSS, copying files to the right folders and minifying images etc.

_Note that you **don't** need to upload your `./_src` folder—it's only needed during development._

### Important note on `sourcemaps`

Magpie is, by default, configured to generate Sass sourcemaps during development. If you're not familiar with them already, sourcemaps make debugging compiled Sass much easier from within a browser's development tools, such as Chrome's Web Inspector.

At time of writing, sourcemaps are still an experimental part of Compass, and require a bleeding-edge branch version in order to work. I recommend that you uninstall previous versions of both Compass and Sass before installing the sourcemaps-enabled build of Compass, like so:

`sudo gem uninstall compass`<br/>
`sudo gem uninstall sass`<br/>
`sudo gem install compass-sourcemaps --pre`

There is also a Gemfile included if you have [Bundler](http://bundler.io/) installed. Running `bundle install` after un-installing will install the correct gems.

**Windows**<br/>
If the compass-sourcemaps package doesn't build during installation, try installing/updating `nmake` and re-running the `install ...` command.

**Mac OS**<br/>
If you get a compilation error during install, make sure you've installed the relevant (and latest) Command Line Tools for you version of Mac OS.