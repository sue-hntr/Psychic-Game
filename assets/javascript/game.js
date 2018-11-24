//remaking the rps
  // Make our variables global to the runtime of our application
  var startOver = false;
  var userGuessLower = "";
  var guessesSoFar = " ";
  var messagePut = " ";

// Create variables that hold references to the places in the HTML where we want to display things.
  var winsCount = document.getElementById('winsCount');
  var loseCount = document.getElementById('loseCount');
  var guessesLeftCount = document.getElementById('guessesLeftCount');
  var guessesSoFarCount = document.getElementById('guessesSoFarCount');
  var messagePut = document.getElementById('messagePut');

// Creating variables to hold the number of wins, losses and guesses left
  var win = 0;
  var lose = 0;
  var guessesLeft = 9;


 //create an array of all letters only 
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 //function to start a new round for the game, keeping the 
  function newRound(win, lose) {
    win = win;
    lose = lose;
    guessesSoFar = "";
    guessesSoFarCount.textContent = guessesSoFar;
    guessesLeft = 9;
    guessesLeftCount.textContent = guessesLeft;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuessFinal = computerGuess;
    console.log("computerGuessFinal: " + computerGuessFinal);
  }
 

// RETRIEVES COMPUTER GUESS AND PUTS IT INTO ANOTHER VARIABLE
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var computerGuessFinal = computerGuess;
    console.log("computerGuessFinal: " + computerGuessFinal);


    document.onkeyup = function(event) {
      // Determines which key was pressed.
        var userGuess = event.key;
        var userGuessLower = userGuess.toLowerCase();
        console.log("User guess: " + userGuessLower);

//test if userGuess is a letter. don't count the guess if not a letter
        var a = computerChoices.indexOf(userGuessLower);
        if (a > -1){

//THIS TESTS IF COMPUTER AND USER ARE EQUAL
          if(computerGuessFinal === userGuessLower){
//WINNING & WANT TO PLAY AGAIN?
            console.log("Yes. you win");
            win++;
            winsCount.textContent = win;
            messagePut.textContent = "You Win! play another round?";
            newRound();
          }
//GUESS AGAIN (SHOW No of GUESSES and LETTERS GUESSED)          
          else if (guessesLeft > 0 ){
            messagePut.textContent = "Not the same letter as the computer. Try again.";
            guessesLeft--;
            guessesLeftCount.textContent = guessesLeft;
            guessesSoFar = userGuessLower.concat(" ", guessesSoFar);
            guessesSoFarCount.textContent = guessesSoFar;
          }
//LOSING AND WANT TO PLAY AGAIN?          
          else if (guessesLeft === 0){
            // guessesLeft = 0;
            lose++
            loseCount.textContent = lose;
            messagePut.textContent = "you are out of guesses. Play another round?";
            newRound();
          }
//WHAT HAPPENS IF NOT A LETTER      
      } else {
        messagePut.textContent = "not a letter. does not count. try another key.";
      } 

  }
 