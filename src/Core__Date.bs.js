// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml = require("rescript/lib/js/caml.js");

var UTC = {};

function equal(a, b) {
  return a.getTime() === b.getTime();
}

function compare(a, b) {
  return Caml.float_compare(a.getTime(), b.getTime());
}

exports.UTC = UTC;
exports.equal = equal;
exports.compare = compare;
/* No side effect */
