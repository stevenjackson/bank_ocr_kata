const expect = require('chai').expect

const ocr = require('../app/ocr')
const digit = require('../app/digit').digits

let parser;
describe('ocr', function() {
  beforeEach(function() {
    parser = ocr();
  });

  describe('handleLine', function() {
    it('parses account number every fourth line', function() {
      parser.handleLine("___________________________");
      expect(parser.accountNumbers).to.be.empty;
      parser.handleLine("___________________________");
      expect(parser.accountNumbers).to.be.empty;
      parser.handleLine("___________________________");
      expect(parser.accountNumbers).to.be.empty;
      parser.handleLine("                           ");
      expect(parser.accountNumbers).to.have.lengthOf(1);
    });
  });

  describe('parseAccountNumber', function() {
    it('can parse all zeros', function() {
      const input = [
        " _  _  _  _  _  _  _  _  _ ",
        "| || || || || || || || || |",
        "|_||_||_||_||_||_||_||_||_|",
      ];
      expect(parser.parseAccountNumber(input)).to.equal("000000000");
    });

    it('mixed account number', function() {
      const input = [
        " _     _  _     _  _  _  _ ",
        "| |  | _| _||_||_ |_   ||_|",
        "|_|  ||_  _|  | _||_|  ||_|",
      ];
      expect(parser.parseAccountNumber(input)).to.equal("012345678");
    });
  });

  describe('buildDigits', function() {
    it('splits a line into 3x3 grid', function() {
      var lines = ["___|||", "___|||", "___|||"];
      var digits = parser.buildDigits(lines);
      expect(digits[0]).to.deep.equal(["___", "___", "___"]);
      expect(digits[1]).to.deep.equal(["|||", "|||", "|||"]);
    });
  });

  describe('toAccountNumber', function() {
    it('turns digits(lines) into a numeric string', function() {
      var digits = [digit.one, digit.two, digit.three];
      expect(parser.toAccountNumber(digits)).to.equal("123");
    });
  });
});
