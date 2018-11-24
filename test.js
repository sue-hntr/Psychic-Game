research

//Create vars for all ids that show change
var myWin = document.getElementById('win');
var myButton = document.getElementById('button');

//you can create event listeners for ids that are events
//semicolons at end of event listeners
myButton.addEventListener('click', () => {
    myHeading.style.color = 'red';
});

//concat onto front of string

var mystr = "Doe";
mystr = "John " + mystr;
//OR
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

guessesSoFar = userGuessLower.concat(" ", guessesSoFar);
