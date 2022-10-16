const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.arr.length;
  },

  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    this.arr = this.arr.concat(value)
    return this
  },

  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if(typeof position != 'number' || position > this.arr.length || position < 1) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      this.arr.splice(position - 1, 1)
    }
    return this;
  },

  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.arr = this.arr.reverse();
    return this;
  },

  finishChain() {
    //throw new NotImplementedError('Not implemented');
    const finish = this.arr;
    this.arr= [];
    return finish.map(chain => `( ${chain} )`).join('~~');
  }
};

module.exports = {
  chainMaker
};
