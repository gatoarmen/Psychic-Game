'use strict';




let wins = 0;



let losses = 0;

let remainingGuesses = 8;

 
// Create an array of letters guess.

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// choose a random letter
let randomLetter = letters[Math.floor(Math.random()*letters.length)];

console.log(randomLetter)




// DOM event for people to type the letter 

 document.addEventListener("keydown", keyPress);

 //compare letter guessed with random letter

function keyPress() { 
    
        var userGuess = event.key;

        if(userGuess === randomLetter){
            wins++;
        }else{
            remainingGuesses--;
        }
    
        if(guesses === 0){
            losses++
        }
    
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + remainingGuesses;
    
    }  // moved to below the innerHTML update
    

// compare the two letters








// when they type the letter make the countdown go down 




// make the letter appear on the screen 

let lettersGuessed = [];

console.log (lettersGuessed)