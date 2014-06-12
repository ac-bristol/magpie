http_path = "../"
sass_dir = "./scss"
css_dir = "../assets/styles"
images_dir = "../assets/images"
javascripts_dir = "../assets/scripts"

## Intelligent output style flag
output_style = (environment == :production) ? :compressed : :expanded

## Additional Sass configuration
Sass::Script::Number.precision = 3
sourcemaps_required = (environment == :production) ? false : true
sass_options = {:sourcemap => sourcemaps_required}
enable_sourcemaps = sourcemaps_required
