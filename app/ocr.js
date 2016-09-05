const _ = require('lodash');
const parseDigit = require('./digit').parseDigit;

const parseAccountNumber = function(lines) {
  var digits = Array(9);
  _.times(digits.length, function(index) {
    digits[index] = Array();
  });

  lines.map(function(line) {
    return line.match(/.{3}/g);
  }).forEach(function(line) {
    line.forEach(function(part, index) {
      digits[index].push(part);
    });
  });

  return digits.map(function(digit) {
    return parseDigit(digit);
  }).join("");
}

module.exports = {
  parseAccountNumber: parseAccountNumber
}
