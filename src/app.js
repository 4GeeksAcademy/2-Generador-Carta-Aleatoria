/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7"]; // utilizaremos la funcion math.floor y math random, para los numeros aleatorio
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  // ccon esto capturamos las etiqueta ID
  let top = document.querySelector("#top");
  let end = document.querySelector("#end");
  let number = document.querySelector("#number");
  // con este codigo le entregamos los valores a las etiquetaas capturadas antes
  top.innerHTML = suits[indexSuits];
  end.innerHTML = suits[indexSuits];
  number.innerHTML = numbers[indexNumbers];
  // para determinar un color utilizando ternario ('?')
  let currentClass =
    suits[indexSuits] == "♦" || suits[indexSuits] == "♥"
      ? "text-danger"
      : "text-dark";
  top.className = currentClass;
  end.className = currentClass;
  number.className = currentClass;
}

setInterval(() => newCard(), 10000);
// codigo para el cambio de tiempo en 10 segs
window.onload = function() {
  //write your code here
  newCard();
};

let btnNewCard = document.querySelector("#btnNewCard");
btnNewCard.addEventListener("click", () => newCard());
