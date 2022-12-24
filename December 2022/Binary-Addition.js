// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// Source:
// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a, b) {
  return (a + b).toString(2);
}

// Add the two numbers. Then convert to string with a (2) parameter. This will return a 0 and 1 (binary).
