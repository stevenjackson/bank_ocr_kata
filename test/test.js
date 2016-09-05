const expect = require('chai').expect
const ocr = require('../app/ocr')

describe('parseDigit', function() {
  it('can parse a zero', function() {
    let input = [
                 " - "
                ,"| |"
                ," - "
    ];

    expect(ocr.parseDigit(input)).to.equal(0);
  });
});
