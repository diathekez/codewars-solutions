// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Source:
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let words = x.split(" "),
    mx = 0,
    res = "";
  for (let i = 0; i < words.length; i++) {
    let s = words[i],
      val = 0;
    for (let j = 0; j < s.length; j++) {
      val += s.charCodeAt(j) - 96;
    }
    if (val > mx) {
      mx = val;
      res = s;
    }
  }
  return res;
}
