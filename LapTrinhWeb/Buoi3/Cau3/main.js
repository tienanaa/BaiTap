function func(a) {
  var b = [];
  var s = 0;
  console.log("Các số chẵn:");
  for (const i of a) {
    if (i % 2 == 0) console.log(i);
    if (i > s) s = i;
    if (i > 0) b.push(i);
  }
  console.log("Số lớn nhất:", s);
  console.log("Mảng chứa các số lớn hơn 0:", b);
}
var input = prompt("Nhập các số nguyên cách nhau bằng dấu phẩy:");
var a = input.split(",").map(Number);
console.log("Mảng ban đầu:", a);
func(a);
