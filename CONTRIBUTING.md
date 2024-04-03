# Contributing Code

## Setup

To build highlightjs-justfile, you'll need the latest long term support (LTS) release of Node and npm.
We recommend nvm to manage multiple active Node versions.

Start by cloning the source from GitHub:

```bash
$ git clone https://github.com/gsemet/highlightjs-justfile.git
```

Next, install the dependencies using `npm` or `just`:

```bash
$ npm install
# or using just
$ just dev
```

## Test

To execute the tests, open a terminal and type:

```bash
$ npm test
# or
$ just test
```

## Build the distribution

Use `just build` or follow this step by step process:

To generate the `dist` file, we need to clone the [highlight.js](https://github.com/highlightjs/highlight.js) main repository:

```bash
$ git clone https://github.com/highlightjs/highlight.js
$ cd highlight.js
```

Since the tooling is not yet merged on master
(see https://github.com/highlightjs/highlight.js/issues/2328),
we need to checkout the `squash_build_pipeline` branch:

```bash
$ git checkout squash_build_pipeline
```

Then, install the dependencies:

```bash
$ npm install
```

Create an `extra` directory and clone the [highlightjs-justfile](https://github.com/gsemet/highlightjs-justfile) repository in it:

```bash
$ mkdir extra
$ cd extra
$ git clone https://github.com/gsemet/highlightjs-justfile
$ cd ..
```

Now we are ready to generate the `dist` file.
Open a terminal and type:

```bash
$ node  --stack-size=65500  ./tools/build.js -t cdn
```

The generated file will be available in both `build/languages/cypher.min.js` and
`extra/highlightjs-justfile/dist/cypher.min.js`.
