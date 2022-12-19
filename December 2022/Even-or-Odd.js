// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Source:
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function even_or_odd(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
