// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Test = require("./Test.bs.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Core__Float = require("../src/Core__Float.bs.js");
var PervasivesU = require("rescript/lib/js/pervasivesU.js");

var eq = Caml_obj.equal;

Test.run([
      [
        "FloatTests.res",
        5,
        20,
        27
      ],
      "clamp"
    ], Core__Float.clamp(undefined, undefined, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        6,
        20,
        35
      ],
      "clamp - < min"
    ], Core__Float.clamp(4.3, undefined, 4.1), eq, 4.3);

Test.run([
      [
        "FloatTests.res",
        7,
        20,
        35
      ],
      "clamp - > min"
    ], Core__Float.clamp(4.1, undefined, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        8,
        20,
        35
      ],
      "clamp - < max"
    ], Core__Float.clamp(undefined, 4.3, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        9,
        20,
        35
      ],
      "clamp - > max"
    ], Core__Float.clamp(undefined, 4.1, 4.2), eq, 4.1);

Test.run([
      [
        "FloatTests.res",
        10,
        20,
        42
      ],
      "clamp - < min, < max"
    ], Core__Float.clamp(4.3, 4.5, 4.2), eq, 4.3);

Test.run([
      [
        "FloatTests.res",
        11,
        20,
        42
      ],
      "clamp - < min, > max"
    ], Core__Float.clamp(4.3, 4.1, 4.2), eq, 4.3);

Test.run([
      [
        "FloatTests.res",
        12,
        20,
        42
      ],
      "clamp - > min, < max"
    ], Core__Float.clamp(4.1, 4.5, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        13,
        20,
        42
      ],
      "clamp - > min, > max"
    ], Core__Float.clamp(4.1, 4.1, 4.2), eq, 4.1);

Test.run([
      [
        "FloatTests.res",
        14,
        20,
        33
      ],
      "clamp - nan"
    ], isNaN(Core__Float.clamp(4.1, 4.3, Number.NaN)), eq, true);

Test.run([
      [
        "FloatTests.res",
        15,
        20,
        38
      ],
      "clamp - infinity"
    ], Core__Float.clamp(4.1, 4.3, PervasivesU.infinity), eq, 4.3);

Test.run([
      [
        "FloatTests.res",
        16,
        20,
        39
      ],
      "clamp - -infinity"
    ], Core__Float.clamp(4.1, 4.3, PervasivesU.neg_infinity), eq, 4.1);

Test.run([
      [
        "FloatTests.res",
        17,
        20,
        37
      ],
      "clamp - min nan"
    ], Core__Float.clamp(Number.NaN, undefined, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        18,
        20,
        37
      ],
      "clamp - max nan"
    ], Core__Float.clamp(undefined, Number.NaN, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        19,
        20,
        46
      ],
      "clamp - min nan, max nan"
    ], Core__Float.clamp(Number.NaN, Number.NaN, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        20,
        20,
        42
      ],
      "clamp - min infinity"
    ], Core__Float.clamp(PervasivesU.infinity, undefined, 4.2), eq, PervasivesU.infinity);

Test.run([
      [
        "FloatTests.res",
        21,
        20,
        42
      ],
      "clamp - max infinity"
    ], Core__Float.clamp(undefined, PervasivesU.infinity, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        22,
        20,
        43
      ],
      "clamp - min -infinity"
    ], Core__Float.clamp(PervasivesU.neg_infinity, undefined, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        23,
        20,
        43
      ],
      "clamp - max -infinity"
    ], Core__Float.clamp(undefined, PervasivesU.neg_infinity, 4.2), eq, PervasivesU.neg_infinity);

Test.run([
      [
        "FloatTests.res",
        25,
        13,
        49
      ],
      "clamp - min infinity, max infinity"
    ], Core__Float.clamp(PervasivesU.infinity, PervasivesU.infinity, 4.2), eq, PervasivesU.infinity);

Test.run([
      [
        "FloatTests.res",
        31,
        13,
        50
      ],
      "clamp - min -infinity, max infinity"
    ], Core__Float.clamp(PervasivesU.neg_infinity, PervasivesU.infinity, 4.2), eq, 4.2);

Test.run([
      [
        "FloatTests.res",
        37,
        13,
        50
      ],
      "clamp - min infinity, max -infinity"
    ], Core__Float.clamp(PervasivesU.infinity, PervasivesU.neg_infinity, 4.2), eq, PervasivesU.infinity);

Test.run([
      [
        "FloatTests.res",
        43,
        13,
        51
      ],
      "clamp - min -infinity, max -infinity"
    ], Core__Float.clamp(PervasivesU.neg_infinity, PervasivesU.neg_infinity, 4.2), eq, PervasivesU.neg_infinity);

Test.run([
      [
        "FloatTests.res",
        49,
        20,
        46
      ],
      "Float.equal optimization"
    ], false, eq, false);

exports.eq = eq;
/*  Not a pure module */
