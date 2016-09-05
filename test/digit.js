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

  it('can parse a three', function() {
    const three = [
                 " _ "
                ," _|"
                ," _|"
    ];

    expect(parseDigit(three)).to.equal(3);
  });

  it('can parse a four', function() {
    const four = [
                 "   "
                ,"|_|"
                ,"  |"
    ];
    expect(parseDigit(four)).to.equal(4);
  });

  it('can parse a five', function() {
    const five = [
                 " _ "
                ,"|_ "
                ," _|"
    ];
    expect(parseDigit(five)).to.equal(5);
  });

  it('can parse a three', function() {
    const six = [
                 " _ "
                ,"|_ "
                ,"|_|"
    ];
    expect(parseDigit(six)).to.equal(6);
  });

  it('can parse a seven', function() {
    const seven = [
                 " _ "
                ,"  |"
                ,"  |"
    ];
    expect(parseDigit(seven)).to.equal(7);
  });

  it('can parse a eight', function() {
    const eight = [
                 " _ "
                ,"|_|"
                ,"|_|"
    ];
    expect(parseDigit(eight)).to.equal(8);
  });

  it('can parse a nine', function() {
    const nine = [
                 " _ "
                ,"|_|"
                ," _|"
    ];
    expect(parseDigit(nine)).to.equal(9);
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
