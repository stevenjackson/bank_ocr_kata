const ocr = require('./ocr');
const parseFile = function(filePath) {
  return new Promise(function(resolve, reject) {
    const lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filePath)
    });
    const parser = ocr();

    lineReader.on('line', function (line) {
      parser.handleLine(line);
    });

    lineReader.on('close', function(line) {
      resolve(parser.accountNumbers);
    });
  });
}

module.exports = {
  parseFile: parseFile
}
