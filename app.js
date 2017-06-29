'use strict';
var clickNewGameButton = document.getElementById('new-game');
var bradyTable = document.getElementById('bradyTable');
var correctImage = document.getElementById('marsha');
var incorrectImage = document.getElementById('bradyTable');
var clock = document.getElementById('clockdiv');
var secondsSpan = clock.querySelector('.seconds');
var counter = 0;
var soundChoice;
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
  for (var i = 0; i < array.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = array[i].src;
    imgEl.id = array[i].name;
    bradyTable.appendChild(imgEl);
  }
  correctImageListener();
  incorrectImageListener();
}

function shuffle() {
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
  return array;
  initRender();
}

function triggerSoundSetting() {
  if (soundChoice === 1) {
    var audio = document.getElementById('audio');
    audio.play();
  } else {
    console.log('Sound turned off!!');
  }
}

// New Game Listener
// when user clicks New Game button, newGameListener triggered
// newGameListener triggers handleGameRefresh event handler
function newGameListener() {
  clickNewGameButton.addEventListener('click', handleNewGameClick);
}

function correctImageListener() {
  correctImage = document.getElementById('marsha');
  correctImage.addEventListener('click', handleCorrectImageClick);
}

// Incorrect Image Listener
function incorrectImageListener() {
  bradyTable = document.getElementById('bradyTable');
  bradyTable.addEventListener('click', handleIncorrectImageClick);
}

// sending counter to local storage
function scoreToLocalStorage() {
  localStorage.setItem('score', 'counter');
}

// New Game Handler
function handleNewGameClick(event) {
  event.preventDefault();
  bradyTable.innerHTML = '';
  counter = 0;
  shuffle();
  initRender();
  initializeClock();
}

// Correct Image Handler
function handleCorrectImageClick(event) {
  event.preventDefault();
  bradyTable.innerHTML = '';
  // added 2 instead of 1 because clicking anywhere on bradyTable incl Marsha
  // subtracts 1 from counter
  counter += 2;
  shuffle();
  initRender();
  triggerSoundSetting();
}

// Incorrect Image Handler
function handleIncorrectImageClick(event) {
  event.preventDefault();
  bradyTable.innerHTML = '';
  counter -= 1;
  shuffle();
  initRender();
}

// function that calls localStorage for counter,
// redirects user to Scores page when seconds reach 0
function handleEndTime(seconds) {
  if (seconds === 0) {
    // call Kyle's localStorage function
    location.href = 'scores.html';
  }
}

//clock countdown
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000);
  handleEndTime(seconds);
  return {
    'total': t,
    'seconds': seconds
  };
}

function initializeClock() {
  var endtime = new Date(Date.parse(new Date()) + 60 * 1000);
  clearInterval(interval);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.seconds <= 0) {
      clearInterval(interval);
    }
  }
  interval = setInterval(updateClock, 1);
}

initializeClock();

// retrieves sound preference data from Local Storage
function getSoundFromLocalStorage() {
// if localStorage exists
  if (localStorage.length > 0) {
      // retrieve, parse, assign to array of objects
    soundChoice = JSON.parse(localStorage.getItem('soundPref'));
  } else {
  }
  return soundChoice;
}

initRender();
getSoundFromLocalStorage();
newGameListener();
incorrectImageListener();
correctImageListener();
