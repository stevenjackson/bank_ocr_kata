const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

const parseFile = require('../app/file_reader').parseFile;

describe('parseFile integration', function() {
  it('can read two account numbers', function() {
    accountNumbers = parseFile('test/two_account_sample.txt');
    return expect(accountNumbers).to.eventually.deep.equal(["123456789", "490067715"]);
  });

  it('can read hundreds of account numbers', function() {
    accountNumbers = parseFile('test/500_account_sample.txt');
    return expect(accountNumbers).to.eventually.have.length(504);
  });
});
