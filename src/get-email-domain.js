const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const revert = email.split('').reverse().join('');
  const i = revert.search(/@/);
  return email.slice(-i);
}

module.exports = {
  getEmailDomain
};
