# reftest-list-parser [![Build Status](https://travis-ci.org/azu/reftest-list-parser.svg?branch=master)](https://travis-ci.org/azu/reftest-list-parser)

`reftest.list`(reference test list) file parser in JavaScript

- [mozilla-central mozilla/layout/tools/reftest/README.txt](http://mxr.mozilla.org/mozilla-central/source/layout/tools/reftest/README.txt "mozilla-central mozilla/layout/tools/reftest/README.txt")

## Installation

     npm install reftest-list-parser

## Usage

This library parse following format list:

```
# comment
== a.html ./b.html
!=  ../c.html  d.html
```

to json:

```json
[
  {
    "targetA": "a.html",
    "targetB": "./b.html",
    "compareOperator": "=="
  },
  {
    "targetA": "../c.html",
    "targetB": "d.html",
    "compareOperator": "!="
  }
]
```

written by js:

```js
var fs = require("fs");
var parse = require("reftest-list-parser").parse;
var text = fs.readFileSync("reftest.list", "utf-8");
var reftestList = parse(text);
```

## Tests

     npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT