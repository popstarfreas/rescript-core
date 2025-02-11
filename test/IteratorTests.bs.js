// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Test = require("./Test.bs.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Core__Iterator = require("../src/Core__Iterator.bs.js");
var Core__AsyncIterator = require("../src/Core__AsyncIterator.bs.js");

var eq = Caml_obj.equal;

var iterator = ((() => {
    var array1 = ['a', 'b', 'c'];
    var iterator1 = array1[Symbol.iterator]();
    return iterator1
  })());

var syncResult = {
  contents: undefined
};

Core__Iterator.forEach(iterator, (function (v) {
        if (v === "b") {
          syncResult.contents = "b";
          return ;
        }
        
      }));

Test.run([
      [
        "IteratorTests.res",
        21,
        20,
        34
      ],
      "Sync forEach"
    ], syncResult.contents, eq, "b");

var asyncIterator = ((() => {
    var map1 = new Map();

    map1.set('first', '1');
    map1.set('second', '2');

    var iterator1 = map1[Symbol.iterator]();
    return iterator1;
  })());

var asyncResult = {
  contents: undefined
};

await Core__AsyncIterator.forEach(asyncIterator, (function (v) {
        if (v !== undefined && v[0] === "second") {
          asyncResult.contents = "second";
          return ;
        }
        
      }));

Test.run([
      [
        "IteratorTests.res",
        44,
        20,
        35
      ],
      "Async forEach"
    ], asyncResult.contents, eq, "second");

var asyncResult$1 = {
  contents: undefined
};

var count = {
  contents: 0
};

var asyncIterator$1 = Core__AsyncIterator.make(async function () {
      var currentCount = count.contents;
      count.contents = currentCount + 1 | 0;
      if (currentCount === 3) {
        return Core__AsyncIterator.done(currentCount);
      } else {
        return Core__AsyncIterator.value(currentCount);
      }
    });

await Core__AsyncIterator.forEach(asyncIterator$1, (function (v) {
        if (v === 3) {
          asyncResult$1.contents = "done";
        } else {
          console.log("next..");
        }
      }));

Test.run([
      [
        "IteratorTests.res",
        69,
        20,
        54
      ],
      "Creating your own async iterator"
    ], asyncResult$1.contents, eq, "done");

exports.eq = eq;
exports.iterator = iterator;
exports.syncResult = syncResult;
exports.asyncResult = asyncResult;
exports.asyncIterator = asyncIterator$1;
/* iterator Not a pure module */
