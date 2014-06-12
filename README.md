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

## Compiling your Magpie project

Compass can continuously rebuild an in-development version of your Magpie project from the command line. Make sure you're in the `./_src` folder of your Magpie project, then run the following command:

`compass watch`

_You could also use an automated build tool, such as [Scout](http://mhs.github.io/scout-app/), to continuously rebuild your Magpie project. Just make sure you configure the tool to point to the `./_src` folder, too, because that's where the Compass build config lives._

When you're ready to deploy your Magpie project to a production environment, use this command instead:

`compass compile --environment=production --force`

This will automatically concatenate all project style sheets into a single, minified CSS file for you, ready to upload!

_Note that you **don't** need to upload your `./_src` folder—it's only needed during development._

### Important note on `sourcemaps`

Magpie is, by default, configured to generate Sass sourcemaps during development. If you're not familiar with them already, sourcemaps make debugging compiled Sass much easier from within a browser's development tools, such as Chrome's Web Inspector.

At time of writing, sourcemaps are still an experimental part of Compass, and require a bleeding-edge branch version in order to work. I recommend that you uninstall previous versions of both Compass and Sass before installing the sourcemaps-enabled build of Compass, like so:

`sudo gem uninstall compass`<br/>
`sudo gem uninstall sass`<br/>
`sudo gem install compass-sourcemaps --pre`

**Windows**<br/>
If the compass-sourcemaps package doesn't build during installation, try installing/updating `nmake` and re-running the `install ...` command.

**Mac OS**<br/>
If you get a compilation error during install, make sure you've installed the relevant (and latest) Command Line Tools for you version of Mac OS.