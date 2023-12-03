/**
 *
 * Problem Statement:- Given an integer 'n', find the factorial of that integer.
 *
 * In mathematics, the factorial of ta non-negative integer 'n', denoted n!, is the product of all the positive integers less that or equal to 'n'.
 *
 * 0!=1;
 * 4!= 4*3*2*1=24
 * 5!= 5*4*3*2*1=120
 */

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result = result * i;
  return result;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(5)); //120

/**
 * Big-O notation
 * O(n)
 */
