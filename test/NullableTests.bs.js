// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.bs.js";

function shouldHandleNullableValues() {
  var tNull = null;
  var tUndefined = undefined;
  var tValue = "hello";
  var tmp;
  tmp = (tNull === null || tNull === undefined) && tNull === null ? true : false;
  Test.run([
        [
          "NullableTests.res",
          9,
          15,
          35
        ],
        "Should handle null"
      ], tmp, (function (prim0, prim1) {
          return prim0 === prim1;
        }), true);
  var tmp$1;
  tmp$1 = (tUndefined === null || tUndefined === undefined) && tUndefined !== null ? true : false;
  Test.run([
        [
          "NullableTests.res",
          19,
          15,
          40
        ],
        "Should handle undefined"
      ], tmp$1, (function (prim0, prim1) {
          return prim0 === prim1;
        }), true);
  var tmp$2;
  tmp$2 = tValue === null || tValue === undefined || tValue !== "hello" ? false : true;
  Test.run([
        [
          "NullableTests.res",
          29,
          15,
          36
        ],
        "Should handle value"
      ], tmp$2, (function (prim0, prim1) {
          return prim0 === prim1;
        }), true);
}

shouldHandleNullableValues();

export {
  shouldHandleNullableValues ,
}
/*  Not a pure module */
