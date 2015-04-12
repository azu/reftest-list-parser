// LICENSE : MIT
"use strict";
var assert = require("power-assert");
var fs = require("fs");
var parse = require("../").parse;
var filePath = __dirname + "/reftest.list";
describe("reftest-list-parser", function () {
    it("should parse .list", function () {
        var text = fs.readFileSync(filePath, "utf-8");
        var reftestList = parse(text);
        assert.deepEqual(reftestList, require("./retest.list.json"));
    });
});