function setBackGroundColor(color) {
  let h1 = document.getElementById("backgroundColor");
  h1.style.backgroundColor = color.value;

}

function setRandomBackGroundColor() {
  let h1 = document.getElementById("backgroundColor");

  let listRandomColors = ["Blue", "Red", "Green", "Yellow", "Orange", "Grey", "Brown"];
  let randomNumber = Math.floor(Math.random() * listRandomColors.length);

  h1.style.color = listRandomColors[randomNumber];
  h1.innerText = listRandomColors[randomNumber];
}
