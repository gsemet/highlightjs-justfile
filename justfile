
_default: help

# This message
help:
  @just --list

# Setup local dev environment
dev:
  npm install

# Execute unit tests
test:
  npm run test

# Update all dependencies and write lockfile
update:
  npm update

build: clean-dist
  #!/usr/bin/env bash
  set -euxo pipefail
  mkdir -p build/
  git clone --depth 1 https://github.com/highlightjs/highlight.js build/highlight.js
  (
    cd build/highlight.js
    # git checkout squash_build_pipeline
    npm install
  )
  mkdir -p build/highlight.js/extra//
  (
    cd build/highlight.js/extra
    rm -f justfile
    ln -s ../../.. justfile
  )
  (
    cd build/highlight.js
    node  --stack-size=65500  ./tools/build.js -t cdn
  )
  echo "Dist files are in build/highlight.js/build/languages/"
  find build/highlight.js/build/languages -name "just*"

clean-dist:
  rm -rf build/highlight.js

[linux]
test-open:
  xdg-open test.html

[macos]
test-open:
  open test.html
