const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  const number = n.toString();
  const result = [];

  for (let i = 0; i < number.length; i++) {
    result.push(number.slice(0, i) + number.slice(i + 1))
    console.log(i, number.slice(0,  i));
    console.log(i, number.slice(i + 1));
    console.log('result: ', result);
  }
  result.map(item => +item);
  let max =  Math.max(...result);
  return max;
}
deleteDigit(152)

module.exports = {
  deleteDigit
};
