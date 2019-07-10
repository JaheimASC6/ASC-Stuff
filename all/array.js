const heroes = [
"Iron Man",
"Batman", 
"Wakanda", 
"Captain America", 
"Spiderman"];

console.log('The length is...', heroes.length);

heroes.push('CaptainMarvel');

console.log('The new length is...', heroes.length);

console.log('The second hero is...', heroes[1]);

heroes[1]= "Nightwing";

console.log('The new second hero is...', heroes[1]);

heroes.pop();

console.log(heroes);



