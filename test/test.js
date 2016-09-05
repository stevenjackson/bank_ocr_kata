const expect = require('chai').expect
const ocr = require('../app/ocr')

describe('parseDigit', function() {
  it('can parse a zero', function() {
    const zero = [
                 " - "
                ,"| |"
                ," - "
    ];

    expect(ocr.parseDigit(zero)).to.equal(0);
  });
  it('can parse a one', function() {
    const one = [
                 "  |"
                ,"  |"
                ,"  |"
    ];

    expect(ocr.parseDigit(one)).to.equal(1);
  });
});
