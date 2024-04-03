# Justfile - a language grammar for [highlight.js](https://highlightjs.org/)

Justfile is a handy way to save and run project-specific commands.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.
You'll use the minified version found in the `dist` directory.
This module is just a CDN build of the language,
so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" charset="UTF-8"
  src="/path/to/highlightjs-justfile/dist/justfile.min.js"></script>
<script type="text/javascript">
  hljs.registerLanguage("justfile", hljsDefineJustfile);
  hljs.highlightAll();
</script>
```

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc,
simply require the language module,
then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsJustfile = require('highlightjs-justfile');

hljs.registerLanguage("justfile", hljsJustfile);
hljs.highlightAll();
```

## License

Highlight.js is released under the CC0 1.0 License. See [LICENSE][1] file
for details.

### Author

Gaetan Semet <gaetan@xeberon.net>

### Maintainer

Gaetan Semet <gaetan@xeberon.net>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about Just/Justfile: <https://github.com/casey/just>

[1]: https://github.com/highlightjs/highlightjs-justfile/blob/master/LICENSE
