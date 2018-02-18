//zad9.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	
var dinosaur = dinosaur.toUpperCase();

console.log(text.length);

var text = text.slice(12,145);

var text = dinosaur + text;

var textNew = text.length/2;
console.log(textNew);

var textNew = text.substr(0,72);
console.log(textNew);
