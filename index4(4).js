let operationButtons = document.getElementsByClassName('operation-button')

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOparation(oparation) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);

  if (oparation === "+") {
    result = number1 + number2;
  } else if (oparation === "-") {
    result = number1 - number2;
  } else if (oparation === "*") {
    result = number1 * number2;
  } else if (oparation === "/") {
    result = number1 / number2;
  } else {
    result = "not";
  }
  window.alert(result);
}

function onButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let oparation = clickedElement.innerHTML;
  makeOparation(oparation);
}

for (let i = 0; i < operationButtons.length; i++) {
  let button = operationButtons[i]
  button.addEventListener("click", onButtonClick);
}
