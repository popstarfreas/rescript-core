// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Path = require("path");
var Util = require("util");
var Core__Option = require("../src/Core__Option.bs.js");
var CodeFrame = require("@babel/code-frame");

var dirname = (new URL('.', import.meta.url).pathname);

function print(value) {
  var match = typeof value;
  if (match === "object" || match === "bigint") {
    return Util.inspect(value);
  } else if (match === "string") {
    return Core__Option.getExn(JSON.stringify(value), undefined);
  } else {
    return String(value);
  }
}

function run(loc, left, comparator, right) {
  if (comparator(left, right)) {
    return ;
  }
  var match = loc[0];
  var line = match[1];
  var file = match[0];
  var fileContent = Fs.readFileSync(Path.join(dirname, file), {
        encoding: "utf-8"
      });
  var left$1 = print(left);
  var right$1 = print(right);
  var codeFrame = CodeFrame.codeFrameColumns(fileContent, {
        start: {
          line: line
        }
      }, {
        highlightCode: true
      });
  var errorMessage = "\n  \u001b[31mTest Failure!\n  \u001b[36m" + file + "\u001b[0m:\u001b[2m" + String(line) + "\n" + codeFrame + "\n  \u001b[39mLeft: \u001b[31m" + left$1 + "\n  \u001b[39mRight: \u001b[31m" + right$1 + "\u001b[0m\n";
  console.log(errorMessage);
  var obj = {};
  Error.captureStackTrace(obj);
  console.log(obj.stack.replace(/\n    /g, "\n  ").replace(/^Error\n/, "").replace(/^.+\n/, "").replace(/\n  at .+\(node:internal.+\n?/g, ""));
}

exports.dirname = dirname;
exports.print = print;
exports.run = run;
/* dirname Not a pure module */
