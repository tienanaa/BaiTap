function nto(n) {
  if (n < 2) return false;
  for (var i = 2; i < n; i++)
    if (n % i == 0) {
      return false;
    }
  return true;
}
console.log(nto(1));
console.log(nto(17));
console.log(nto(21));
