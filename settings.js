'use strict';

var soundPreference = document.getElementsByName('sound');
var currentValue = 1;
var soundSelect;

function startValue() {
  if (localStorage.soundPref === '2') {
    document.getElementById('sound-off').click();
  } else {
    document.getElementById('sound-on').click();
  }
}

function handleClick(myRadio) {
  currentValue = parseInt(myRadio.value);
  console.log(myRadio.value);
  console.log(currentValue);
  storeToLocalStorage(currentValue);
  getSoundFromLocalStorage();
}

// store data in localStorage every time the data changes
function storeToLocalStorage() {
  localStorage.setItem('soundPref', JSON.stringify(currentValue));
}

// retrieves sound preference data from Local Storage
function getSoundFromLocalStorage() {
// if localStorage exists
  if (localStorage.length > 0) {
      // retrieve, parse, assign to array of objects
    soundSelect = JSON.parse(localStorage.getItem('soundPref'));
  } else {
  }
  return soundSelect;
}

startValue();
storeToLocalStorage();
