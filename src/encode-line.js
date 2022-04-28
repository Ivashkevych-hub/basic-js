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
  let arr = [],
      counter = 1;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        } else {
            arr.push([counter, str[i]]);
            counter = 1;
        }
    }
    for(let i = 0;i<arr.length;i++){
      if(arr[i][0] == 1){
        arr[i].shift();
      }
    }
    let b = arr.flat(1).join('')
   return b;
}
encodeLine('aabbbc')
module.exports = {
  encodeLine
};
