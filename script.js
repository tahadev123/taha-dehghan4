function isPrime(number) {
  let divisor = 0;
  if (typeof number !== "number") {
    return "Invalid argument";
  } else {
    if (number === 2) {
      return true;
    } else {
      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          divisor++;
        }
      }
      if (divisor === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(isPrime(2));
console.log(isPrime(6));
console.log(isPrime("two"));
