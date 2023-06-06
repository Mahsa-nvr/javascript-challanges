const str = "afewreociwddwjej";
function findRepeat(str) {
  const arr = str.split('');
  const hash = new Map();
  const result = [];
  // If repeat the value is false, if no repeat the value is true
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (!v)
      result.push(k);
  });
  return result;
}
console.log(...findRepeat(str));



// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

const findRepeatStr = (str) => {
const seen = new Set();
for(let char of str) {
    if(seen.has(char)){
        return char
    }else{
        seen.add(char)
    }
}

return -1;
}