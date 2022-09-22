// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).

const isPrime = num => {
  if (num > 1) {
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }
  return false
}

console.log(isPrime(73))
