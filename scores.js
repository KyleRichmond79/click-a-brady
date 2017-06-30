'use strict';
var score;
var nameInput = document.getElementById('playerName');
var scoreTable = document.getElementById('scoreTable');

// function makeElement(type, userName, score, parent) {
//   var newEl = document.createElement(type);
//   newEl.textContent = userName;
//   parent.appendChild(newEl);
//   newEl = document.createElement(type);
//   newEl.textContent = score;
//   parent.appendChild(newEl);
// }

function displayScores(userName) {
  scoreTableEl.innerHTML = '';
  console.log(userName);
  makeElement('td', userName, score, 'tr');

}

function handleGameForm(event) {
  console.log(event);
  event.preventDefault();
  console.log('why are you broken?');
  var userName = event.target.playerName.value;
  console.log('username', userName);

  if (!userName) {
    alert('You must enter a name');
  }
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = userName;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');

  tdEl.textContent = JSON.parse(localStorage.score);
  trEl.appendChild(tdEl);
  scoreTable.appendChild(trEl);
}

function checkLocalStorage() {
  if (localStorage.length > 0) {
    score = JSON.parse(localStorage.getItem('score'));
  } else {}
  return score;
}

checkLocalStorage();

var submit = document.getElementById('gameForm');
console.log(submit);
submit.addEventListener('submit', handleGameForm);
