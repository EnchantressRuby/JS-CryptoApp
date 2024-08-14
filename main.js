import "./scss/style.scss"
import {getCoins} from "./src/getcoins.js"

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // reject def actions
  getInputVal();
  // e.target.reset()
  form.reset();
})

const getInputVal = () => {
  const input = document.querySelector("header form input").value;

  if(!input.trim()){
    alert("Input cannot be blank!");
  } else {
    getCoins(input);
  };

};