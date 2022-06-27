function zeros(n) {
  if (n < 5) return 0;

  let zeros = 0;
  for (let i = 5; i <= n; i *= 5) {
    zeros += Math.floor(n / i);
  }

  return zeros;
}

console.log(zeros(24));
