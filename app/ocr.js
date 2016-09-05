const _ = require('lodash')
const digit = require('./digit')
const parseDigit = function(lines) {
  if(_.isEqual(lines, digit.one)) {
    return 1;
  } else {
    return 0;
  }
}


module.exports = {
  parseDigit: parseDigit
}
