var arr = [];
var input = 0;
// functionality of equal button
function calculate(value) {
  if (input !== 0) {
    input = parseFloat(input);
    addInput(input);
  }
  var firstValue = value[0];
  console.log(firstValue);
  console.log(value);
  var dividedByZero = 0;
  for (var i = 2; i < value.length; i = i + 2) {
    if (arr[i - 1] === "+") {
      firstValue += value[i];
    } else if (arr[i - 1] === "-") {
      firstValue -= value[i];
    } else if (arr[i - 1] === "/") {
      if (value[i] === 0) {
        dividedByZero = 1;
      } else {
        firstValue = firstValue / value[i];
      }
    } else if (arr[i - 1] === "*") {
      firstValue = firstValue * value[i];
    }
  }
  // it will convert number to string .
  firstValue = firstValue.toFixed(10);
  console.log(firstValue);
  firstValue = parseFloat(firstValue);
  if (dividedByZero === 1) {
    clearAll();
    document.getElementById("Output").innerHTML = "ERROR";
  } else {
    document.getElementById("Output").innerHTML = firstValue;
    input = firstValue;
    arr = [];
  }
}
// it will push the input value into array
function addInput(input) {
  arr.push(input);
}
// functionality to clear the results
function clearAll() {
  arr = [];
  input = 0;
  document.getElementById("Output").innerHTML = "0";
}
// it will take the value from user
function ButtonValue(val) {
  if (document.getElementById("Output").innerHTML == "0" && val != ".") {
    document.getElementById("Output").innerHTML = "";
  }
  if (!(val === ".") || !input.match(/[.]/)) {
    input += val;
    document.getElementById("Output").innerHTML += val;
  }
}
//functionality of handling the keys of operators
function operatorButton(val) {
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);
    addInput(input);
    addInput(val);
    document.getElementById("Output").innerHTML += val;
    input = 0;
  }
  if (val == "-" && isNaN(arr[0]) && input !== "-") {
    input = "-";
    document.getElementById("Output").innerHTML = "-";
  }
}
