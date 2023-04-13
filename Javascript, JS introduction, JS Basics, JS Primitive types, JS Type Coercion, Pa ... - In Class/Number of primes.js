function isPrime(num) {
      if (num <= 1) {
            return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                  return false;
            }
      }
      return true;
}

function numberOfPrimes(N) {
      let count = 0;
      for (let i = 2; i <= N; i++) {
            if (isPrime(i)) {
                  count++;
            }
      }
      return count;
}
