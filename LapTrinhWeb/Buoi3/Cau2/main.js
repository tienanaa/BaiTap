function TongSole(n) {
  var s = 0;
  for (var i = 1; i <= n; i++) if (i % 2 == 1) s += i;
  return s;
}
console.log(TongSole(8));
