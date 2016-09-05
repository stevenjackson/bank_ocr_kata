const _ = require('lodash')

const zero = [
   " - "
  ,"| |"
  ," - "
];

const one = [
   "  |"
  ,"  |"
  ,"  |"
];

const map = [
  { digit: zero, value: 0 },
  { digit: one, value: 1 },
]


const parseDigit = function(lines) {
  let digit = _.find(map, function(digit) {
    return _.isEqual(lines, digit.digit);
  });

  if(digit) {
    return digit.value;
  } else {
    throw new Error('Not Scannable');
  }
}

module.exports = {
  zero: zero,
  one: one,
  parseDigit: parseDigit
};
