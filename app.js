'use strict';
var clickNewGameButton = document.getElementById('new-game');
var bradyTable = document.getElementById('bradyTable');
var correctImage = document.getElementById('marsha');
<<<<<<< HEAD
var incorrectImage = document.getElementById('carol');
=======
var incorrectImage = document.getElementById('bradyTable');
var clock = document.getElementById('clockdiv');
var secondsSpan = clock.querySelector('.seconds');
>>>>>>> 54f71884be7213b8cdc4d27e36600acee3a4f6e2
var counter = 0;
var array = [];
var interval = null;

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
  // clickNewGameButton.addEventListener('click', getTimeRemaining);
  // clickNewGameButton.addEventListener('click', initializeClock);
}

// function timerListener() {
//   console.log('Inside timerListener!');
//   clickNewGameButton.addEventListener('click', getTimeRemaining);
// }

function correctImageListener() {
  console.log('Inside correctImageListener!');
  correctImage = document.getElementById('marsha');
  // console.log(correctImage);
  correctImage.addEventListener('click', handleCorrectImageClick);
}

// Incorrect Image Listener
function incorrectImageListener() {
  console.log('Inside incorrectImageListener!');
  carol = document.getElementById('carol');
  // console.log(correctImage);
  carol.addEventListener('click', handleIncorrectImageClick);
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
  // getTimeRemaining();
  initializeClock();
  // setInterval(initializeClock, 1000);
}

// Correct Image Handler
function handleCorrectImageClick(event) {
  console.log('Inside handleCorrectImageClick!');
  event.preventDefault();
  // console.log('Testing event handler!');
  bradyTable.innerHTML = '';
  counter += 1;
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

//clock countdown
function getTimeRemaining(endtime) {
  console.log('hello');
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000);
  console.log(t);
  console.log(seconds);
  return {
    'total': t,
    'seconds': seconds
  };
}

function initializeClock() {
  var endtime = new Date(Date.parse(new Date()) + 60 * 1000);
  clearInterval(interval);

  console.log('ENDTIME: ', endtime);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    console.log(t.total);
    console.log(t.seconds);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.seconds <= 0) {
      clearInterval(interval);
      console.log('finished');
    }
  }
  interval = setInterval(updateClock, 1);
}

initializeClock();

initRender();
newGameListener();
incorrectImageListener();
correctImageListener();
