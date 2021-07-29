function factorial(n) {
  let buffer = n;
  let result = 0;
  if (n == 0 || n == 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    buffer = buffer * (n - i);
  }
  return result = buffer * 1;

}
