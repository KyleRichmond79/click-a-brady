'use strict';

var soundPreference = document.getElementsByName('sound');
var currentValue = 1;
var soundSelect;

function startClickValue() {
  document.getElementById('sound-on').click();
}

function handleClick(myRadio) {
  currentValue = myRadio.value;
  storeToLocalStorage(currentValue);
}

// store data in localStorage every time the data changes
function storeToLocalStorage(currentValue) {
  localStorage.setItem('soundPref', JSON.stringify(currentValue));
}

storeToLocalStorage();
startClickValue();
