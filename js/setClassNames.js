const out = (...str) => console.log(...str);

const pbSetStyle = document.getElementById("styleName");
const inpElementName = document.getElementById("elementName");

function setElementStyle() {
  const elm = document.querySelector("." + inpElementName.value);
  elm.style = pbSetStyle.value;
}
