const out = (...str) => console.log(...str);

out("hej", "med", "dig");


function print(str) {

  let n = document.getElementById("welcomeText");

  n.innerText = "Welcome " + str;

}


function calculateTwoNumbers(firstNumber, secondNumber, char) {

  let answerH2 = document.getElementById("calculateAnswer");
  let n1 = parseInt(firstNumber.value);
  let n2 = parseInt(secondNumber.value);

  let calculated;

  switch (char.value) {
    case '+':
      calculated = n1 + n2;
      break;
    case '-':
      calculated = n1 - n2;
      break;
    case '*':
      calculated = n1 * n2;
      break;
    case '/':
      calculated = n1 / n2;
      break;
    default:
      calculated = n1 + n2;
  }

  answerH2.innerText = calculated;
}


