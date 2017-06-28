'use strict';

var newGameArray;
var LiElId;
var clearBoard = document.getElementById('clear-button');
var scoresListEl = document.getElementById('scores-table');
var compareCheckBox = document.getElementById('compare-type');

function clearButtonClick() {
  localStorage.clear();
  scoresListEl.innerHTML = '';
  newGameArray = [];
}
// The code I used as the model (AveryPratt/Jigsaw-Puzzle) for our scores.js had the line below and it was commented out so I wrote it in case we missed functionality and needed it/KDR
// startGameButton.addEventListener('click', startButtonClick);

function compareScores(score1, score2){
  if(parseFloat(score1.time) > parseFloat(score2.time)){
    return 1;
  }
  else return -1;
}
function compareScoresGraded(score1, score2){
  if(parseFloat(score1.time) / score1.turns > parseFloat(score2.time) / score2.turns){
    return 1;
  }
  else return -1;
}

var currentCompareFunction;

function displayScores(){
  scoresListEl.textContent = '';
  if(compareCheckBox.checked === true){
    currentCompareFunction = compareScoresGraded;
  } else {
    currentCompareFunction = compareScores;
  }
  newGameArray.sort(currentCompareFunction);
  for (var i = 0; i < newGameArray.length; i++) {
    console.log(newGameArray.time);
    LiElId = document.createElement('li');
    LiElId.setAttribute('class', 'scoreList');
    LiElId.textContent = newGameArray[i].name + ': ' + newGameArray[i].time + ' seconds - ' + newGameArray[i].turns + ' turns';
    scoresListEl.appendChild(LiElId);
  }
}

clearBoard.addEventListener('click', clearButtonClick);
compareCheckBox.addEventListener('change', displayScores);

// iife
(function checkLocalStorage(){
  if(localStorage.getItem('gameArrayEl')){
    var loadOldGames = localStorage.getItem('gameArrayEl');
    newGameArray = JSON.parse(loadOldGames);
    console.log('newGameArray: ', newGameArray);
  } else {
    console.log('nothing found in localStorage');
    newGameArray = [];
  }
}());

displayScores();