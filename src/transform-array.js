const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
 // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!");
}
if(arr.length === 0 ) return [];

let index = arr.indexOf('--discard-prev');
let prevIndex = index - 1;

  if(index >  0 ) {
    console.log(index) ;
    console.log(prevIndex);
  let result = arr.slice(0, index ) + ',' + arr.slice(index +1);
  console.log(result);
  result =  result.split(',').map(el => +el)
  }


/*  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {

}*/

}

module.exports = {
  transform
};
