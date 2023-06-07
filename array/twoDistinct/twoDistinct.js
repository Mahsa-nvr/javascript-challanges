// In each input array, every number repeats at least once, except for two. 
// Write a function that returns the two unique numbers.
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
// Notes
// Keep the same ordering in the output.

const test = (arr) => {
    let newArr = [];
    for (let i = 0; i<arr.length ; i++) {
        let element = arr[i]
       if(arr.indexOf(element) === arr.lastIndexOf(element)) {
        newArr.push(element)
       }
    }
  return newArr;
}

console.log(test([1,3,1,2,2,5,6,8,6,8]))