document.getElementsByTagName("h1")[0].style.fontSize = "80px";

function test() {
  alert("The function 'test' is executed - hello");
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  test();
});
