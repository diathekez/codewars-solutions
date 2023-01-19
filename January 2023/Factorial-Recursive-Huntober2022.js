// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// Hint:  Look at our fib solution. What are the base cases for factorial?

// Source:
// https://www.codewars.com/kata/5694cb0ec554589633000036

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

5 * factorial(5 - 1);
4 * factorial(4 - 1);
3 * factorial(3 - 1);
2 * factorial(2 - 1);
