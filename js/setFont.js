let fontSizeNum = 10;
let pTag = document.getElementById("first");
let btn2 = document.getElementById("btn2");

let pbWidth = 10;

function increaseFontSize() {
  fontSizeNum++;
  pTag.style.fontSize = String(fontSizeNum) + 'px';
}

function decreaseFontSize() {
  fontSizeNum--;
  pTag.style.fontSize = String(fontSizeNum) + 'px';
}

function escapePressed(k) {
  console.log(k);
  if (k.key == 'Escape') {
    pTag.style.fontSize = '10px';
  }
}

function increaseButtonWidth(k) {
  if (k.key == 'p') {
    pbWidth++;
    btn2.style.width = String(pbWidth) + 'px';
  }
}

function keyPressed(k) {
  console.log(k);
  switch (k.key) {
    case 'Escape' :
      escapePressed(k);
      break;
    case 'p' :
      increaseButtonWidth(k);
      break;
    default:
      console.log("ikke noget vigtigt k=" + k);
  }
}

document.addEventListener('keydown', keyPressed);
