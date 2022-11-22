// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const reversed = [],
    len = str.length;
  let result = "",
    i = len;
  while (i-- > 0) {
    if (str[i] == " ") {
      reversed.push(result);
      result = "";
    } else {
      result += str[i];
    }
  }
  while (reversed.length) {
    result += " " + reversed.pop();
  }
  return result;
}

// Best practice

function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
