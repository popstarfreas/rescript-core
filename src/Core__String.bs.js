// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function indexOfOpt(s, search) {
  var index = s.indexOf(search);
  if (index !== -1) {
    return index;
  }
  
}

function lastIndexOfOpt(s, search) {
  var index = s.lastIndexOf(search);
  if (index !== -1) {
    return index;
  }
  
}

function searchOpt(s, re) {
  var index = s.search(re);
  if (index !== -1) {
    return index;
  }
  
}

exports.indexOfOpt = indexOfOpt;
exports.lastIndexOfOpt = lastIndexOfOpt;
exports.searchOpt = searchOpt;
/* No side effect */
