#!/usr/bin/env node

import { add } from './math.js'

export { greet } from './greet.js'
export { fraud } from './fraud.js'


const note = process.argv[2];
const newNote = {
  id: Date.now(),
  note,
}
console.log('your new note', newNote)

// const logger = require('./logger.js');

// logger.log("heyy");
// logger.log2(29);

// console.log(add(3457, 65879));
