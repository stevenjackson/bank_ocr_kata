const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect

const ocr = require('../app/ocr')
const parseAccountNumber = ocr.parseAccountNumber
const parseFile = ocr.parseFile

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

describe('parseFile', function() {
  it('can read two account numbers', function() {
    accountNumbers = parseFile('test/two_account_sample.txt');
    return expect(accountNumbers).to.eventually.deep.equal(["123456789", "490067715"]);
  });
});

