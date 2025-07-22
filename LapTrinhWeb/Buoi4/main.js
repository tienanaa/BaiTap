//yêu cầu 1:
function changeText() {
  document.getElementById("greeting").textContent =
    "Chào mừng bạn đến với bài tập DOM!";
}
//yêu cầu 2:
document.querySelectorAll("button")[1].addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "orange";
});

//yêu cầu 3:
document.querySelectorAll("button")[2].addEventListener("click", function () {
  const value = document.getElementById("todoInput").value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = value;
    const btn = document.createElement("button");
    btn.textContent = "Xóa";
    btn.onclick = function () {
      removeTodo(btn);
    };
    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
});
function removeTodo(btn) {
  const li = btn.parentElement;
  li.remove();
}
document.querySelectorAll("#todoList button").forEach(function (btn) {
  btn.onclick = function () {
    removeTodo(btn);
  };
});
//yêu cầu 4:
function changeImage() {
  document.getElementById("myImage").src =
    "https://www.svgrepo.com/show/452030/avatar-default.svg";
}
//yêu cầu 5:
function toggleHighlight() {
  document.getElementById("toggleClassText").classList.toggle("highlight");
}
