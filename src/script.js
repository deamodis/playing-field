import {Field} from './components/field.js';
import {StartTheGame} from './components/gameStart.js';

let input = document.getElementById('time');
let startButton = document.getElementById("start");
let placeForTheField = document.getElementById("PlaceForTheField");
let field = new Field(10, placeForTheField).createField();

new StartTheGame(startButton, input.value);

input.onchange = function(event) {
    new StartTheGame(startButton, input.value);
};
