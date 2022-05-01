const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let n = 1;
  let newStr = '';
  for(let i =0; i< str.length; i++ ) {
    if(str[i] === str[i+1]) {
      n +=1;
    } else{
      newStr+= n + str[i];
      n = 1;
    }
  }
  newStr = newStr.replace(/1/g, '');
  return newStr;
}


module.exports = {
  encodeLine
};
