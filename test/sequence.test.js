var vows = require('vows')
var assert = require('assert')
var sequence = require('..')

vows.describe('sequence.sequence').addBatch({
  'notes without duration': function () {
    assert.deepEqual(sequence('c d e f'), [
      [ 0, 0.25, 'c' ], [ 0.25, 0.25, 'd' ], [ 0.5, 0.25, 'e' ], [ 0.75, 0.25, 'f' ]
    ])
    assert.deepEqual(sequence('c d e f'), sequence(['c', 'd', 'e', 'f']))
  },
  'notes with duration': function () {
    assert.deepEqual(sequence('c/4 d/8 e/8 c/4'), [
      [ 0, 0.25, 'c' ], [ 0.25, 0.125, 'd' ], [ 0.375, 0.125, 'e' ], [ 0.5, 0.25, 'c' ]
    ])
  }
}).export(module)
