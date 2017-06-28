'use strict';
var clickNewGameButton = document.getElementById('new-game');
var bradyTable = document.getElementById('bradyTable');
var correctImage = document.getElementById('marsha');
var incorrectImage = document.getElementById('bradyTable');
var counter = 0;
var array = [];

function BradyImage (src, name) {
  this.src = src;
  this.name = name;
  array.push(this);
};
var marsha = new BradyImage ('images/marsha.png', 'marsha');
var carol = new BradyImage ('images/carol.png', 'carol');
var greg = new BradyImage ('images/greg.png', 'greg');
var jan = new BradyImage ('images/jan.png', 'jan');
var alice = new BradyImage ('images/alice.png', 'alice');
var peter = new BradyImage ('images/peter.png', 'peter');
var cindy = new BradyImage ('images/cindy.png', 'cindy');
var mike = new BradyImage ('images/mike.png', 'mike');
var bobby = new BradyImage ('images/bobby.png', 'bobby');

function initRender() {
  console.log('do something!');
  for (var i = 0; i < array.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = array[i].src;
    // console.log('image ', imgEl.src);
    imgEl.id = array[i].name;
    bradyTable.appendChild(imgEl);
  }
  correctImageListener();
  incorrectImageListener();
}

function shuffle() {
  console.log('Inside shuffle!');
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  // console.log('Randomized values: ' + array);
  return array;
  initRender();
}

// New Game Listener
// when user clicks New Game button, newGameListener triggered
// newGameListener triggers handleGameRefresh event handler
function newGameListener() {
  console.log('Inside newGameListener!');
  clickNewGameButton.addEventListener('click', handleNewGameClick);
}

// Correct Image Listener
function correctImageListener() {
  console.log('Inside correctImageListener!');
  correctImage = document.getElementById('marsha');
  // console.log(correctImage);
  correctImage.addEventListener('click', handleCorrectImageClick);
}

// Incorrect Image Listener
function incorrectImageListener() {
  console.log('Inside incorrectImageListener!');
  bradyTable = document.getElementById('bradyTable');
  // console.log(correctImage);
  bradyTable.addEventListener('click', handleIncorrectImageClick);
}

// New Game Handler
function handleNewGameClick(event) {
  console.log('Inside handleNewGameClick!');
  event.preventDefault();
  // console.log('Testing event handler!');
  bradyTable.innerHTML = '';
  counter = 0;
  shuffle();
  initRender();
}

// Correct Image Handler
function handleCorrectImageClick(event) {
  console.log('Inside handleCorrectImageClick!');
  event.preventDefault();
  // console.log('Testing event handler!');
  bradyTable.innerHTML = '';
  // added 2 instead of 1 because clicking anywhere on bradyTable incl Marsha
  // subtracts 1 from counter
  counter += 2;
  console.log('Counter is ' + counter);
  shuffle();
  initRender();
}

// Incorrect Image Handler
function handleIncorrectImageClick(event) {
  console.log('Inside handleIncorrectImageClick!');
  event.preventDefault();
  // console.log('Testing event handler!');
  bradyTable.innerHTML = '';
  counter -= 1;
  console.log('Counter is ' + counter);
  shuffle();
  initRender();
}

initRender();
newGameListener();
incorrectImageListener();
correctImageListener();
