// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Source:
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  //   convert string to array
  const strArr = s.split(" ");
  //   loop through array and find length
  const lengthOfWords = strArr.map((string) => {
    return string.length;
  });
  //   output length of shortest string
  return Math.min(...lengthOfWords);
}
