'use strict';

var soundPreference = document.getElementsByName('sound');
var currentValue = 1;

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

// function send() {
//   if (soundPreference[0].checked) {
//     alert('Your sound is turned on!');
//     selectedSoundPref = true;
//     console.log('Test: ' + selectedSoundPref);
//   } else if (soundPreference[1].checked) {
//     alert('Your sound is turned off!');
//     selectedSoundPref = false;
//     cconsole.log('Test: ' + selectedSoundPref);
//   } else {
//     // no checked
//     var msg = '<span>You must select your sound preference!</span><br /><br />';
//     document.getElementById('msg').innerHTML = msg;
//     return false;
//   }
//   return true;
// }
//
// function reset_msg() {
//   document.getElementById('msg').innerHTML = '';
// }

// store data in localStorage every time the data changes
function storeToLocalStorage(currentValue) {
  localStorage.setItem('soundPref', JSON.stringify(currentValue));
  console.log('Test: ' + localStorage.soundPref);
}

storeToLocalStorage();
startClickValue();
