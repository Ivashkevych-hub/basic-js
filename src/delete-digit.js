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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let nStr = n + '';
  // let a = [];
  // for (let i=0 ; i< nStr.length ;i++){
  //   a.push(+nStr[i]);
  // }
  // console.log(a)
  // let min = Math.min(...a);
  // console.log(min);
  // for(let j=0;j<a.length;j++){
  //   if(a[j] == min){
  //     a.splice(j,1)
  //   }
  // }
  // // a.sort((a, b) => b - a);
  // let b = +a.join('')
  // return b;
}
// deleteDigit(125);

module.exports = {
  deleteDigit
};
