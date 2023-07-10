
// A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.

// Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.




function Capacity(n, arr) {
   let exactCap = Math.floor(n / arr.length);
   let middleCap = exactCap / 2;
//    arr.filter(v => v<=middleCap).forEach((v, i) => console.log(v))
  for(let i =0 ;i<arr.length; i++) {
    if(arr[i] <= middleCap) {
        console.log(i)
        return
    }else {
        console.log(-1)
    }
  }
}

Capacity(200, [35, 23, 18, 10, 40]);