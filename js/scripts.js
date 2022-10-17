//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}



//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The result of adding " + number1 + " and " + number2 + " is " + add(number1, number2));
window.alert("The result of subtracting " + number1 + " and " + number2 + " is " + subtract(number1, number2));
window.alert("The result of multiplying " + number1 + " and " + number2 + " is " + multiply(number1, number2));
window.alert("The result of dividing " + number1 + " and " + number2 + " is " + divide(number1, number2));

window.alert("The result of adding " + number1 + " and " + number2 + " is " + add(number1, number2) + " The result of subtracting " + number1 + " and " + number2 + " is " + subtract(number1, number2) + " The result of multiplying " + number1 + " and " + number2 + " is " + multiply(number1, number2) + " The result of dividing " + number1 + " and " + number2 + " is " + divide(number1, number2));