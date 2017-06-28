'use strict';
var array = [];
var bradyTable = document.getElementById('bradyTable');

function BradyImage (src, name) {
  this.src = src;
  this.name = name;
  array.push(this);
};
new BradyImage ('images/marsha.png', 'marsha');
new BradyImage ('images/carol.png', 'carol');
new BradyImage ('images/greg.png', 'greg');
new BradyImage ('images/jan.png', 'jan');
new BradyImage ('images/alice.png', 'alice');
new BradyImage ('images/peter.png', 'peter');
new BradyImage ('images/cindy.png', 'cindy');
new BradyImage ('images/mike.png', 'mike');
new BradyImage ('images/bobby.png', 'bobby');
function initRender() {
  console.log('do something!');
  for (var i = 0; i < array.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = array[i].src;
    console.log('image ', imgEl.src);
    imgEl.id = array[i].name;
    bradyTable.appendChild(imgEl);
  }
}
initRender();
