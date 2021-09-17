import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    if (this.chain === undefined)
      this.chain = [];
    return this.chain.length
    
  },
  addLink(value) {
    if (this.chain === undefined)
      this.chain = [];
    this.chain.push(`( ${String(value)} )`)
    return this;
  },
  removeLink(position) {
    if (this.chain === undefined)
      this.chain = [];
    if (typeof position == 'number' && Number.isInteger(position) && position <= this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1)
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    if (this.chain === undefined)
      this.chain = [];
    this.chain.reverse()
    return this;

  },
  finishChain() {
    if (this.chain === undefined)
      this.chain = [];
    let result = this.chain.join("~~");
    this.chain = []
    return result;
  }
};
