export  {StartTheGame};
import {openWin} from "./modalWindow.js"

let gameStarted = false; // меняем значение этой переменной по клику
let timeForGame;
let scorePeople = document.getElementById('people');
let scoreComputer = document.getElementById('computer');
let field = document.getElementById('PlaceForTheField');

let timerId;


function StartTheGame(elem, time) {
    elem.onclick = start;
    timeForGame = time;
}


function start(event) {
    if (scorePeople.innerHTML === "10" || scoreComputer.innerHTML === "10") {
        gameStarted = false;

        dispatchEvent();

        scorePeople.innerHTML === "10" ? openWin("Player") : openWin("Computer");

        return;
    }
    gameStarted = true;

    dispatchEvent();

    let indexCell = Math.floor(Math.random() * 100);
    let targetCell = document.getElementById("" + indexCell);

    targetCell.style.backgroundColor = "yellow";

    timerId = setTimeout(() => {
        if (targetCell.style.backgroundColor != 'green') {

            targetCell.style.backgroundColor = "red";
            scoreComputer.innerHTML++;
        }
        start()
    }, timeForGame);

}


function dispatchEvent() {
    let myEvent = new CustomEvent("changeGameStatus", {
        bubbles: true,
        detail: gameStarted
    });
    field.dispatchEvent(myEvent);
}