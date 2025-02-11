// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_exn = require("rescript/lib/js/js_exn.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Core__Option = require("../../src/Core__Option.bs.js");
var Intl__LocaleTest = require("./Intl__LocaleTest.bs.js");
var Caml_js_exceptions = require("rescript/lib/js/caml_js_exceptions.js");
var Intl__CollatorTest = require("./Intl__CollatorTest.bs.js");
var Intl__SegmenterTest = require("./Intl__SegmenterTest.bs.js");
var Intl__ListFormatTest = require("./Intl__ListFormatTest.bs.js");
var Intl__PluralRulesTest = require("./Intl__PluralRulesTest.bs.js");
var Intl__NumberFormatTest = require("./Intl__NumberFormatTest.bs.js");
var Intl__DateTimeFormatTest = require("./Intl__DateTimeFormatTest.bs.js");
var Intl__RelativeTimeFormatTest = require("./Intl__RelativeTimeFormatTest.bs.js");

console.log("---");

console.log("Intl");

console.log(Intl.getCanonicalLocales("EN-US"));

console.log(Intl.getCanonicalLocales([
          "EN-US",
          "Fr"
        ]));

try {
  console.log(Intl.getCanonicalLocales("bloop"));
}
catch (raw_e){
  var e = Caml_js_exceptions.internalToOCamlException(raw_e);
  if (e.RE_EXN_ID === Js_exn.$$Error) {
    console.error(e._1);
  } else {
    throw e;
  }
}

try {
  console.log(Intl.supportedValuesOf("calendar"));
  console.log(Intl.supportedValuesOf("collation"));
  console.log(Intl.supportedValuesOf("currency"));
  console.log(Intl.supportedValuesOf("numberingSystem"));
  console.log(Intl.supportedValuesOf("timeZone"));
  console.log(Intl.supportedValuesOf("unit"));
}
catch (raw_e$1){
  var e$1 = Caml_js_exceptions.internalToOCamlException(raw_e$1);
  if (e$1.RE_EXN_ID === Js_exn.$$Error) {
    console.error(e$1._1);
  } else {
    throw e$1;
  }
}

try {
  Intl.supportedValuesOf("someInvalidKey");
  console.error("Shouldn't have been hit");
}
catch (raw_e$2){
  var e$2 = Caml_js_exceptions.internalToOCamlException(raw_e$2);
  if (e$2.RE_EXN_ID === Js_exn.$$Error) {
    var e$3 = e$2._1;
    var message = Core__Option.map(e$3.message, (function (prim) {
            return prim.toLowerCase();
          }));
    var exit = 0;
    if (message === "invalid key : someinvalidkey") {
      console.log("Caught expected error");
    } else {
      exit = 1;
    }
    if (exit === 1) {
      console.warn("Unexpected error message: \"" + message + "\"");
      throw e$3;
    }
    
  } else {
    var e$4 = Caml_js_exceptions.as_js_exn(e$2);
    if (e$4 !== undefined) {
      throw Caml_option.valFromOption(e$4);
    }
    console.error("Unexpected error");
  }
}

var _collator = Intl__CollatorTest._collator;

var collator = Intl__CollatorTest.collator;

var resolvedOptions = Intl__DateTimeFormatTest.resolvedOptions;

var timeZone = Intl__DateTimeFormatTest.timeZone;

var _locale = Intl__LocaleTest._locale;

var locale = Intl__LocaleTest.locale;

var currencyFormatter = Intl__NumberFormatTest.currencyFormatter;

var roundingFormatter = Intl__NumberFormatTest.roundingFormatter;

var groupingFormatter1 = Intl__NumberFormatTest.groupingFormatter1;

var groupingFormatter2 = Intl__NumberFormatTest.groupingFormatter2;

var sigFormatter = Intl__NumberFormatTest.sigFormatter;

var options = Intl__NumberFormatTest.options;

var _formatter = Intl__SegmenterTest._formatter;

var formatter = Intl__SegmenterTest.formatter;

var segments = Intl__SegmenterTest.segments;

exports._collator = _collator;
exports.collator = collator;
exports.resolvedOptions = resolvedOptions;
exports.timeZone = timeZone;
exports._locale = _locale;
exports.locale = locale;
exports.currencyFormatter = currencyFormatter;
exports.roundingFormatter = roundingFormatter;
exports.groupingFormatter1 = groupingFormatter1;
exports.groupingFormatter2 = groupingFormatter2;
exports.sigFormatter = sigFormatter;
exports.options = options;
exports._formatter = _formatter;
exports.formatter = formatter;
exports.segments = segments;
/*  Not a pure module */
