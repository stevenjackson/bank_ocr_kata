const _ = require('lodash')

const zero = [
   " _ "
  ,"| |"
  ,"|_|"
];

const one = [
   "   "
  ,"  |"
  ,"  |"
];

const two = [
   " _ "
  ," _|"
  ,"|_ "
];

const three = [
   " _ "
  ," _|"
  ," _|"
];

const four = [
   "   "
  ,"|_|"
  ,"  |"
];

const five = [
   " _ "
  ,"|_ "
  ," _|"
];

const six = [
   " _ "
  ,"|_ "
  ,"|_|"
];

const seven = [
   " _ "
  ,"  |"
  ,"  |"
];

const eight = [
   " _ "
  ,"|_|"
  ,"|_|"
];

const nine = [
   " _ "
  ,"|_|"
  ," _|"
];

const map = [
  { digit: zero, value: 0 },
  { digit: one, value: 1 },
  { digit: two, value: 2 },
  { digit: three, value: 3 },
  { digit: four, value: 4 },
  { digit: five, value: 5 },
  { digit: six, value: 6 },
  { digit: seven, value: 7 },
  { digit: eight, value: 8 },
  { digit: nine, value: 9 },
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
