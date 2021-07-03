function fib(n) {
  if (n <= 2) return 1;

  let fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}

console.log(fib(100));
