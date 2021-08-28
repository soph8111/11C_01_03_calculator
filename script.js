"use strict";

window.addEventListener("DOMContentLoaded", settingUp);

let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");
const calculate = document.querySelector("#calculate");
const operator = document.querySelector("#operator");
let result = document.querySelector("#results>li");
let decimals = document.querySelector("#decimals");

function settingUp() {
  console.log("settingUp");
  calculate.addEventListener("click", clickCalulate);
}

function clickCalulate() {
  console.log("clickCalulate");

  //   if (firstNumber === true && secondNumber === true) {
  //     console.log("Der er tal at regne på");
  //   } else {
  //     console.log("Der er ikke tal at regne på");
  //   }
  // }
  readFirstNumber();
}

function readFirstNumber() {
  console.log("First number: " + firstNumber.value);

  readSecondNumber();
}

function readSecondNumber() {
  console.log("Second number: " + secondNumber.value);
  readOperator();
}

function readOperator() {
  console.log("readOperator", operator.value);

  if (operator.value === "add") {
    caluatePlus();
  } else if (operator.value === "sub") {
    caluateMinus();
  } else if (operator.value === "mul") {
    caluateMultiply();
  } else {
    calcuateDivide();
  }
}

function caluatePlus() {
  console.log("caluatePlus");

  result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
  console.log(result);

  checkRounded();
}

function caluateMinus() {
  console.log("caluateMinus");

  result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
  console.log(result);

  checkRounded();
}

function caluateMultiply() {
  console.log("caluateMultiply");

  result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
  console.log(result);

  checkRounded();
}

function calcuateDivide() {
  console.log("calcuateDivide");

  result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
  console.log(result);

  checkRounded();
}

function checkRounded() {
  console.log("checkRounded");

  if (document.querySelector("#doround").checked === true) {
    console.log("it's checked");
    readDecimals();
  } else {
    console.log("it's not checked");
    writeResult();
  }
}

function readDecimals() {
  console.log("readDecimals");

  console.log("Decimal is: " + decimals.value);

  roundResult();
}

function roundResult() {
  if (decimals.value === "0") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(0));
    result = result.toFixed(0);
  } else if (decimals.value === "1") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(1));
    result = result.toFixed(1);
  } else if (decimals.value === "2") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(2));
    result = result.toFixed(2);
  } else if (decimals.value === "3") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(3));
    result = result.toFixed(3);
  } else if (decimals.value === "4") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(4));
    result = result.toFixed(4);
  } else if (decimals.value === "5") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(5));
    result = result.toFixed(5);
  } else if (decimals.value === "6") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(6));
    result = result.toFixed(6);
  } else if (decimals.value === "7") {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(7));
    result = result.toFixed(7);
  } else {
    console.log("Decimal is: " + decimals.value);
    console.log(result.toFixed(8));
    result = result.toFixed(8);
  }

  console.log("roundResult");
  writeResult();
}

function writeResult() {
  console.log("writeResult");
  document.querySelector("#results>li").innerHTML = result;
  appendResult();
}

function appendResult() {
  console.log("appendResult");

  let li = document.createElement("li");
  let print = document.createTextNode(result);
  li.appendChild(print);
  document.getElementById("results").appendChild(li);

  scrollList();
}

function scrollList() {
  console.log("scrollList");
  document.getElementById("results").scrollTop = document.getElementById("results").scrollHeight;

  clearList();
}

function clearList() {
  console.log("clearList");
  document.querySelector("#clear").addEventListener("click", () => {
    document.getElementById("results").innerHTML = "<li></li>";
  });
}
