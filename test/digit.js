const expect = require('chai').expect
const parseDigit = require('../app/digit').parseDigit

describe('parseDigit', function() {
  it('can parse a zero', function() {
    const zero = [
                 " _ "
                ,"| |"
                ,"|_|"
    ];

    expect(parseDigit(zero)).to.equal(0);
  });

  it('can parse a one', function() {
    const one = [
                 "   "
                ,"  |"
                ,"  |"
    ];

    expect(parseDigit(one)).to.equal(1);
  });

  it('can parse a two', function() {
    const two = [
                 " _ "
                ," _|"
                ,"|_ "
    ];

    expect(parseDigit(two)).to.equal(2);
  });

  it('throws exception on bad input', function() {
    const garbage = [
          "---",
          "|||",
          "---"
    ];
    expect(() => parseDigit(garbage)).to.throw('Not Scannable');
  });
});
