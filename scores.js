'use strict';

var nameInput =  userName;
var clearBoard = document.getElementById('clear-button');
var scoreTableEl = document.getElementById('scores-table');
var compareCheckBox = document.getElementById('compare-type');

function clearButtonClick() {
  localStorage.clear();
  scorestableEl.innerHTML = '';
}
// The code I used as the model (AveryPratt/Jigsaw-Puzzle) for our scores.js had the line below and it was commented out so I wrote it in case we missed functionality and needed it/KDR
// startGameButton.addEventListener('click', startButtonClick);

// function compareScores(score1, score2){
//   if(parseFloat(score1.time) > parseFloat(score2.time)){
//     return 1;
//   }
//   else return -1;
// }
// function compareScoresGraded(score1, score2){
//   if(parseFloat(score1.time) / score1.turns > parseFloat(score2.time) / score2.turns){
//     return 1;
//   }
//   else return -1;
// }
//
// var currentCompareFunction;

function makeElement(type, userName, score, parent) {
  var newEl = document.createElement(type);
  newEl.textContent = userName;
  newEl.textContent = score;
  parent.appendChild(newEl);
}

function displayScores() {
  scoreTableEl.textContent = '';
  makeElement('td', 'userName', 'score', 'tr');

  scoreTable.appendChild(trEl);
}

clearBoard.addEventListener('click', clearButtonClick);
compareCheckBox.addEventListener('change', displayScores);

function handleGameForm(e) {
  // event.preventDefault();
  var userName = event.target.form.elements.nameInput.value;

  if (!userName.value) {
    alert('You must enter a name');
  }
}

// iife
(function checkLocalStorage(){
  if(localStorage.getItem('counter', 'score')){
    var score = JSON.parse(counter);
  } else {
    counter = 0;
  }
}());

displayScores();
