'use strict';

var soundPreference = document.getElementsByName('sound');
var currentValue = 1;
var soundSelect;

function startClickValue() {
  document.getElementById('sound-on').click();
}

function handleClick(myRadio) {
  console.log('Old value: ' + currentValue);
  console.log('New value: ' + myRadio.value);
  currentValue = myRadio.value;
  console.log(currentValue);
  storeToLocalStorage(currentValue);
}

// store data in localStorage every time the data changes
function storeToLocalStorage(currentValue) {
  localStorage.setItem('soundPref', JSON.stringify(currentValue));
  console.log('Test: ' + localStorage.soundPref);
}

storeToLocalStorage();
startClickValue();
