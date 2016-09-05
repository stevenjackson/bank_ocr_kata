const _ = require('lodash')
const digit = require('./digit')
const parseDigit = function(lines) {
  if(_.isEqual(lines, digit.one)) {
    return 1;
  } else if(_.isEqual(lines, digit.zero)){
    return 0;
  }
  throw new Error('Not Scannable');
}


module.exports = {
  parseDigit: parseDigit
}
