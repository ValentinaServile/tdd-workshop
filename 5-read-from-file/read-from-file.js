const fs = require('fs');

const readFromFile = (fileName) => {
  return fs.readFileSync(fileName);
};

module.exports = readFromFile;