const _ = require('lodash');
const parseDigit = require('./digit').parseDigit;

const parseFile = function(filePath) {
  return new Promise(function(resolve, reject) {
    const accountNumbers = [];
    const lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filePath)
    });
    let buffer = [];

    lineReader.on('line', function (line) {
      buffer.push(line);
      if(buffer.length == 4) {
        accountNumbers.push(parseAccountNumber(buffer.slice(0,3)));
        buffer = [];
      }
    });
    lineReader.on('close', function(line) {
      resolve(accountNumbers);
    });
  });
}

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
  parseFile: parseFile,
  parseAccountNumber: parseAccountNumber
}
