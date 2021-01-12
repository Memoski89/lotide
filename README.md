# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @memoski89/lotide`

**Require it:**

`const _ = require('@memoski89/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: prints the item in [0]
* `tail`: prints item item in[array.length-1] (last iteme in index)
* `eqArrays`: compares Arrays to see if they're the same
* `assertEqual`: determines if the actual input is the same as expected input
* `assertArraysEqual`:determines if inputed array is the same as expected array