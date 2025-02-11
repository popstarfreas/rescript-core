// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Test = require("./Test.bs.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var PervasivesU = require("rescript/lib/js/pervasivesU.js");

var eq = Caml_obj.equal;

var bign = BigInt(Number.MAX_VALUE);

var bign$1 = bign + bign;

Test.run([
      [
        "TestTests.res",
        8,
        20,
        32
      ],
      "print null"
    ], Test.print(null), eq, "null");

Test.run([
      [
        "TestTests.res",
        9,
        20,
        37
      ],
      "print undefined"
    ], Test.print(undefined), eq, "undefined");

Test.run([
      [
        "TestTests.res",
        10,
        20,
        31
      ],
      "print NaN"
    ], Test.print(Number.NaN), eq, "NaN");

Test.run([
      [
        "TestTests.res",
        11,
        20,
        36
      ],
      "print infinity"
    ], Test.print(PervasivesU.infinity), eq, "Infinity");

Test.run([
      [
        "TestTests.res",
        12,
        20,
        29
      ],
      "print 0"
    ], Test.print(0), eq, "0");

Test.run([
      [
        "TestTests.res",
        13,
        20,
        31
      ],
      "print int"
    ], Test.print(42), eq, "42");

Test.run([
      [
        "TestTests.res",
        14,
        20,
        33
      ],
      "print float"
    ], Test.print(4.2), eq, "4.2");

Test.run([
      [
        "TestTests.res",
        15,
        20,
        34
      ],
      "print string"
    ], Test.print("foo"), eq, "\"foo\"");

Test.run([
      [
        "TestTests.res",
        16,
        20,
        32
      ],
      "print bool"
    ], Test.print(true), eq, "true");

Test.run([
      [
        "TestTests.res",
        17,
        20,
        34
      ],
      "print object"
    ], Test.print({
          x: 42
        }), eq, "{ x: 42 }");

Test.run([
      [
        "TestTests.res",
        18,
        20,
        33
      ],
      "print array"
    ], Test.print([
          1,
          2,
          3
        ]), eq, "[ 1, 2, 3 ]");

Test.run([
      [
        "TestTests.res",
        19,
        20,
        34
      ],
      "print symbol"
    ], Test.print(Symbol("foo")), eq, "Symbol(foo)");

Test.run([
      [
        "TestTests.res",
        21,
        13,
        29
      ],
      "print function"
    ], Test.print(function () {
          return 42;
        }), eq, "function () {\n          return 42;\n        }");

Test.run([
      [
        "TestTests.res",
        26,
        20,
        40
      ],
      "print es6 function"
    ], Test.print((() => 42)), eq, "() => 42");

Test.run([
      [
        "TestTests.res",
        28,
        13,
        27
      ],
      "print bigint"
    ], Test.print(bign$1), eq, "359538626972463141629054847463408713596141135051689993197834953606314521560057077521179117265533756343080917907028764928468642653778928365536935093407075033972099821153102564152490980180778657888151737016910267884609166473806445896331617118664246696549595652408289446337476354361838599762500808052368249716736n");

Test.run([
      [
        "TestTests.res",
        33,
        20,
        31
      ],
      "print set"
    ], Test.print(new Set([
              1,
              2,
              2,
              3
            ])), eq, "Set(3) { 1, 2, 3 }");

exports.eq = eq;
exports.bign = bign$1;
/* bign Not a pure module */
