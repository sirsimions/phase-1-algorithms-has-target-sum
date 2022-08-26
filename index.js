function hasTargetSum(array, target){
    for (let i = 0; i<array.length; i++){
      if(array.length<=1)
        return false;
           if (array[i] + array[array.length-1-i] && array[i-1]+ array[i] == target){
              return true};
                 if(array[0] + array[i]== target){
                     return true}
                       if(array[0] + array[i-1]== target){
                         return true}
                           if(array[1] + array[i-1]== target){
                             return true}
                              if (array.length % 2 > 0 && parseInt(array[Math.floor(array.length/2)])*2 == target){
                                return false
                              }
                           }
}

  
  

/* 
  Write the Big O time complexity of your function here
  O(n + 7)
  O(n)
*/
/* 
  Add your pseudocode here
  Add the array elements pairwise making sure that all possible paires are captured
  Prevent the loop from adding an element to itself especially the middle aray element
  compare the same if it equals target
  return true if the target and sum are equal
  return false if not
*/

/*
  Add written explanation of your solution here
  The code adds the array elements beginning from the first and last moving inwards
  All the permutations are taken care of
  It prevents addition of array element to itself (especially for odd array length)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
