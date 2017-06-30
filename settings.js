'use strict';

// Data
var soundPreference = document.getElementsByName('sound');
var currentValue = 1;
var soundSelect;

// Sets which settings button is clicked on page load
// based on default or most recent user selection
function startValue() {
  if (localStorage.soundPref === '2') {
    document.getElementById('sound-off').click();
  } else {
    document.getElementById('sound-on').click();
  }
}

// Passes user selection data to localStorage
function handleClick(myRadio) {
  currentValue = parseInt(myRadio.value);
  console.log(myRadio.value);
  console.log(currentValue);
  storeToLocalStorage(currentValue);
  getSoundFromLocalStorage();
}

// Stores user selection data in localStorage every time the data changes
function storeToLocalStorage() {
  localStorage.setItem('soundPref', JSON.stringify(currentValue));
}

startValue();
