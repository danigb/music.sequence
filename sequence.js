'use strict'

var duration = require('note-duration')

/**
 * Create a sequence
 *
 * @name sequence
 * @function
 * @param {String}
 * @return {Array}
 *
 */
module.exports = function (notes) {
  var pos = null
  return split(notes).map(evt).map(function (e) {
    if (pos === null) pos = 0
    else e[0] = pos
    pos += e[1]
    return e
  })
}

function evt (str) {
  var s = str.split('/')
  return s.length === 1 ? [0, 0.25, str] : [0, duration(s[1]), s[0]]
}

var SEP = /\s*\|\s*|\s*,\s*|\s+/
function split (source) {
  if (Array.isArray(source)) return source
  else if (typeof source === 'string') return source.trim().split(SEP)
  else return []
}
