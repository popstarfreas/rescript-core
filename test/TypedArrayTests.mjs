// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Core__Option from "../src/Core__Option.mjs";

var eq = Caml_obj.equal;

Test.run([
      [
        "TypedArrayTests.res",
        7,
        20,
        44
      ],
      "bytes per element is 8"
    ], BigInt64Array.BYTES_PER_ELEMENT, eq, 8);

var num1 = BigInt("123456789");

var num2 = BigInt("987654321");

var num3 = BigInt("555555555");

function assertTrue(message, predicate) {
  try {
    if (predicate()) {
      return ;
    }
    throw new Error(message);
  }
  catch (exn){
    throw new Error(message);
  }
}

function assertWillThrow(message, f) {
  var didThrow = false;
  try {
    f();
  }
  catch (exn){
    didThrow = true;
  }
  if (didThrow !== false) {
    return ;
  }
  throw new Error(message);
}

function areSame(x, y) {
  return x.toString() === y.toString();
}

assertTrue("fromArray", (function () {
        return areSame(Core__Option.getExn(new BigInt64Array([
                              num1,
                              num2
                            ])[1], undefined), num2);
      }));

assertTrue("fromBuffer", (function () {
        var x = new BigInt64Array(new ArrayBuffer(16));
        x[1] = num2;
        return areSame(Core__Option.getExn(x[1], undefined), num2);
      }));

assertWillThrow("fromBuffer when too short can throw when used", (function () {
        var x = new BigInt64Array(new ArrayBuffer(1));
        x[0] = num1;
        areSame(Core__Option.getExn(x[0], undefined), num1);
      }));

assertTrue("fromBufferWithRange", (function () {
        var x = new BigInt64Array(new ArrayBuffer(16), 0, 1);
        x[0] = num1;
        return areSame(Core__Option.getExn(x[0], undefined), num1);
      }));

assertWillThrow("fromBufferWithRange is unsafe, out of range", (function () {
        var x = new BigInt64Array(new ArrayBuffer(16), 13, 1);
        x[0] = num1;
        areSame(Core__Option.getExn(x[0], undefined), num1);
      }));

assertTrue("fromLength is NOT in bytes", (function () {
        var x = new BigInt64Array(1);
        return x.byteLength === 8;
      }));

function o(prim0, prim1) {
  return BigInt64Array.from(prim0, prim1);
}

export {
  eq ,
  num1 ,
  num2 ,
  num3 ,
  assertTrue ,
  assertWillThrow ,
  areSame ,
  o ,
}
/*  Not a pure module */
