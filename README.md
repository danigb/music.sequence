# music.sequence

[![Build Status](https://travis-ci.org/danigb/music.sequence.svg?branch=master)](https://travis-ci.org/danigb/music.sequence)
[![Test Coverage](https://codeclimate.com/github/danigb/music.sequence/badges/coverage.svg)](https://codeclimate.com/github/danigb/music.sequence/coverage)
[![Climate](https://codeclimate.com/github/danigb/music.sequence/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.sequence)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.sequence.svg)](https://www.npmjs.com/package/music.sequence)
[![license](https://img.shields.io/npm/l/music.sequence.svg)](https://www.npmjs.com/package/music.sequence)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

`music.sequence` is a module to work with musical sequences

```js
var sequence = require('music.sequence')

// create sequences
sequence('c d e f g')
sequence.map('dur', 8, 'c d e f g')

r = sequence.timed(1, '(x x x) (x x)')
sequence.rhythm(r, scale('C major'))

// melodies
map('inst', 'sax', sequence.melody('c2 d e f/8 e c3'))
sequence.repeatLength(4, 'c d e f/8')

// measures
var harmony = sequence.measures('4/4', 'Dm7 G7 | Cmaj7')

// advanced
var chords = sequence.measures('4/4')
var piano = map('inst', 'piano')
var chordNotes = map('val', kit.chord)
var comp = piano(chordNotes(chords('Dm7 G7 | Cmaj7'))
var melody = piano(sequence.measures('4/4', '(d e f) (d e f) | (g d) c')
sequence.merge(notes, harmony)
render(sequence)
```

This is part of [music.kit](https://www.npmjs.com/package/music.kit)

## Installation

Install via npm: `npm install --save music.sequence` (not yet released)

## Guide

### Create sequences

- timed sequences: `timed(1, 'c d (e f g)')`
- measures (any value):
- melodies (note only: repeat length and octaves): `melody('c2 d e f g')`

## Documentation

[Generated documentation here](https://github.com/danigb/music.sequence/blob/master/API.md)

## License

MIT License
