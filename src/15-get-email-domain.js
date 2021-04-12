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
  const arr = email.split('@');
  let adress = arr[arr.length - 1];
  if (adress[0] === '.') adress = adress.slice(1);
  return adress;
}

module.exports = getEmailDomain;
