let expect = require('chai').expect

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
