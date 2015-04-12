// LICENSE : MIT
"use strict";
/**
 * @param {string} line
 * @returns {boolean} if true, then remain the list
 */
function filterLine(line) {
    if (line == null || line.length === 0) {
        return false;
    }
    if (/^#/.test(line)) {
        return false
    }
    return true;
}
function buildLine(line, index) {
    // split " "
    var components = line.split(/\s+/);
    var operator = components[0];
    var targetA = components[1];
    var targetB = components[2];
    if (operator == null) {
        throw new Error("not found operator@" + index + " - " + line)
    }
    if (targetA == null || targetB == null) {
        throw new Error("not found target@" + index + " - " + line)
    }
    return {
        compareOperator: operator,
        targetA: targetA.trim(),
        targetB: targetB.trim()
    };
}
function parse(text) {
    var lines = text.split("\n");
    return lines.filter(filterLine).map(buildLine);
}
module.exports = {
    parse: parse
};