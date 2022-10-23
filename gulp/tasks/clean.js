const del = require('del');

const clean = () => {
  return del('public')
}

module.exports = clean;
