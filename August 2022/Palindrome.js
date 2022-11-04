// Return a boolean with its appropriate response depending on whether the word is a palindrome or not.

const isPalidrome = (word) => word === word.split("").reverse().join("");

// function isPalidrome(word){
//   let reversedWord = word.split('').reverse().join('')
//   return reversedWord === word
// }
