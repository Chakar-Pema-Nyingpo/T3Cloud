var rl = require('readline-sync');

var story = ""

story = story + "Once upon a time, there lived a person named "
var userName = rl.question("What's your name? ")
story = story + userName + ". "

story = story + "They came from the beautiful village of "
var villageName = rl.question("What's your village name? ")
story = story + villageName + ". "

story = story + "Every day they ate "
var food = rl.question("What's your favorite food? ")
story = story + food + ". "

story = story + "They became the world's greatest "
var profession = rl.question("What's your profession? ")
story = story + profession + ". "

story = story + "His profession is "
var hobby = rl.question("What's your Hobby? ");
story = story + hobby + ". ";

story = story + "His hobby is ";
var like = rl.question ("What do you like");
story = story + like + ". ";
console.log(story);