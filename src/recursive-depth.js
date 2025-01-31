const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   /* const calculateDepth = (arr) => {
      let counter = 1;
      for (let el of arr) {
        if (Array.isArray(el)) {
        let  max = Math.max(calculateDepth(el));
        }
      }
      return counter + max;
    }
  }
}*/
  return Array.isArray(arr) ? 1 + Math.max(...arr.map(calculateDepth)) : 0;
  }
}



module.exports = {
  DepthCalculator
};
