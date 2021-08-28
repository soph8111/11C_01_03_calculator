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

  readFirstNumer();
}

function readFirstNumer() {
  console.log("First number: " + firstNumber.value);

  readSecondNumer();
}

function readSecondNumer() {
  console.log("Second number: " + secondNumber.value);
  readOperator();
}

function readOperator() {
  console.log("readOperator", operator.value);
  caluatePlus();
}

function caluatePlus() {
  console.log("caluatePlus");
  checkRounded();
}

function caluateMinus() {
  console.log("caluateMinus");
  checkRounded();
}

function caluateMultiply() {
  console.log("caluateMultiply");
  checkRounded();
}

function calcuateDivide() {
  console.log("calcuateDivide");
  checkRounded();
}

function checkRounded() {
  console.log("checkRounded");
  readDecimals();
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
