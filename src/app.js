/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(randomSuitGen());
  document.querySelector(".number").innerHTML = randomNumberGen();
};
let randomSuitGen = () => {
  let suits = ["diamond", "heart", "spade", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};

let randomNumberGen = () => {
  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};
//DOM MANIP
document.querySelector("#newCard").addEventListener("click", function() {
  document.querySelector(".card").classList.remove("heart");
  document.querySelector(".card").classList.remove("club");
  document.querySelector(".card").classList.remove("diamond");
  document.querySelector(".card").classList.remove("spade");
  document.querySelector(".card").classList.add(randomSuitGen());
  document.querySelector(".number").innerHTML = randomNumberGen();
});
