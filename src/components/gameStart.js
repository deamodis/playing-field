let gameStarted = false; // меняем значение этой переменной по клику
let gameStateForField;
let timeForGame;

let scorePeople = parseInt(document.getElementById('people').innerHTML);
let scoreComputer = parseInt(document.getElementById('computer').innerHTML);

let timerId;

function start(event){
    if(+scorePeople === 10 || +scoreComputer === 10 ){
        return;
    }

    gameStarted = true;
    scorePeople++;

    let indexCell = Math.floor(Math.random() * 100);
    let targetCell =  document.getElementById("" + indexCell);

    targetCell.style.backgroundColor = "yellow";

    timerId = setTimeout( () => { targetCell.style.backgroundColor = "red"; start()}
    , timeForGame);

}


function StartTheGame(elem, time){
    elem.onclick = start;
    timeForGame = time;
    this.gameStarted = gameStarted;
}


export default StartTheGame;

