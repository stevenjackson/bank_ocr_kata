const expect = require('chai').expect
const parseAccountNumber = require('../app/ocr').parseAccountNumber

describe('parseAccountNumber', function() {
  it('can parse all zeros', function() {
    const input = [
      " _  _  _  _  _  _  _  _  _ ",
      "| || || || || || || || || |",
      "|_||_||_||_||_||_||_||_||_|",
    ];
    expect(parseAccountNumber(input)).to.equal("000000000");
  });
  it('mixed account number', function() {
    const input = [
      " _     _  _     _  _  _  _ ",
      "| |  | _| _||_||_ |_   ||_|",
      "|_|  ||_  _|  | _||_|  ||_|",
    ];
    expect(parseAccountNumber(input)).to.equal("012345678");
  });
});

