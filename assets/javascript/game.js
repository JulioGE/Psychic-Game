

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updateGuessesLeft = function() {
 
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
 
  document.querySelector('#Guessedletters').innerHTML = "Your Guesses so far: " + lettersGuessed.join(', ');
};

var reset = function() {
  console.log("i am in reset")
  totalGuesses = 9;
  guessesLeft = 9;
  lettersGuessed = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();

}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

lettersGuessed.push(userGuess);
updateGuessesLeft();
updateGuessesSoFar();

if (guessesLeft > 0)  {

if (userGuess == letterToGuess){
  wins++
  document.querySelector('#Wins').innerHTML = "Wins: " + wins;
  alert("The letter to guess is " + letterToGuess);
  reset();
  }
  }
  else{
    losses++;
    document.querySelector('#Losses').innerHTML = "Losses: " + losses;
    reset();
  }
}