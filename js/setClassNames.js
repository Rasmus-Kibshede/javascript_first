const out = (...str) => console.log(...str);

const pbSetStyle = document.getElementById("styleName");
const inpElementName = document.getElementById("elementName");

function setElementStyle() {
  const elm = document.querySelector(inpElementName.value);
  const firstChar = String(pbSetStyle.value).substring(0, 1);
  const pureName = String(pbSetStyle.value).substring(1, pbSetStyle.value.length);

  if (firstChar == '.') {
    elm.className = pureName;
  } else if (firstChar == '#') {
    elm.id = pureName;
  }
}
