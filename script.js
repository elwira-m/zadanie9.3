//script.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	
var dinosaur = dinosaur.toUpperCase();

var textNew = text.replace('Velociraptor', dinosaur);

var textNew = textNew.substr(0,text.length / 2);

console.log(textNew);
