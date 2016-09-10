const _ = require('lodash');
const parseDigit = require('./digit').parseDigit;

const ocr = function() {
  let buffer = [];
  const self = {
    accountNumbers: [],

    handleLine: function(line) {
      buffer.push(line);
      if(buffer.length == 4) {
        let accountNumber = self.parseAccountNumber(buffer.slice(0,3));
        self.accountNumbers.push(accountNumber);
        buffer = [];
      }
    },

    parseAccountNumber: function(lines) {
      let digits = self.buildDigits(lines);
      return self.toAccountNumber(digits);
    },

    buildDigits: function(lines) {
      let chunks = lines.map(function(line) {
        return line.match(/.{3}/g);
      });
      return _.zip(...chunks);
    },

    toAccountNumber: function(digits) {
      return digits.map(function(digit) {
        return parseDigit(digit);
      }).join("");
    },
  };
  return self;
}

module.exports = ocr;
