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
function transform(arr) {
  let resultArr = [];
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for(let i =0;i<arr.length;i++){
    resultArr.push(arr[i]);
  }
  for(let j =0;j<resultArr.length;j++){
    if(resultArr[j] == '--double-next'){
      resultArr[j] = resultArr[j+1];
    }
    if(resultArr[j] == '--double-prev'){
      if(resultArr[j-1]){
        resultArr[j] = resultArr[j-1];
      }  else {
        resultArr.shift();
      }
      
    }
    if(resultArr[j] == '--discard-prev'){
      if(resultArr[j-1]){
        resultArr.splice(j-1, 2)
      } else {
        resultArr.shift();
      }
     
    }
    if(resultArr[j] == '--discard-next'){
      if(resultArr[j+1]){
        resultArr.splice(j, 2);
      }else {
        resultArr.splice(j, 1);
      }
      
    }
    

  }
  return resultArr;
}
transform([1, 2, 3, '--double-next', 4, 5]);
transform([1, 2, 3, '--discard-next', 4, 5])

module.exports = {
  transform
};
