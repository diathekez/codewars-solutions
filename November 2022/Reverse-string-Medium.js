// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

// Source:

// https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

function reverseString(str) {
  let reverseStr = "";
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}
