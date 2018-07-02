import Field from './components/field.js';
import StartTheGame from './components/gameStart.js';



let input = document.getElementById('time');
let gameStarted;

let startButton = document.getElementById("start");

input.onchange = function(event){
    console.log('go')
  gameStarted = new StartTheGame(startButton, input.value ); // конструктор который навешивает обработчик на кнопку и возвращает состояние игры (начата / завершена)
};

gameStarted = new StartTheGame(startButton, input.value );
let placeForTheField = document.getElementById("PlaceForTheField");

let field = new Field(10, placeForTheField).createField();



