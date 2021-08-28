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
  roundResult();
}

function roundResult() {
  console.log("roundResult");
  writeResult();
}

function writeResult() {
  console.log("writeResult");
  appendResult();
}

function appendResult() {
  console.log("appendResult");
  scrollList();
}

function scrollList() {
  console.log("scrollList");
  clearList();
}

function clearList() {
  console.log("clearList");
}
