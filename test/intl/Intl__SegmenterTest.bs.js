// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


console.log("---");

console.log("Intl.Segmenter");

Intl.Segmenter.supportedLocalesOf([
      "en-US",
      "en-GB"
    ]);

Intl.Segmenter.supportedLocalesOf([
      "en-US",
      "en-GB"
    ], {
      localeMatcher: "lookup"
    });

new Intl.Segmenter();

new Intl.Segmenter([
      "en-US",
      "en-GB"
    ]);

var _formatter = new Intl.Segmenter(undefined, {
      granularity: "word"
    });

var formatter = new Intl.Segmenter(["en-US"], {
      granularity: "word"
    });

console.log(formatter.resolvedOptions());

var segments = formatter.segment("This is a sentence with several words");

console.log(segments);

console.log(segments.containing());

console.log(segments.containing(1));

exports._formatter = _formatter;
exports.formatter = formatter;
exports.segments = segments;
/*  Not a pure module */
