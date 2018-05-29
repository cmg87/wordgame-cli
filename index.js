let word = require('./word');
let inquirer = require('inquirer');
let words = ['object oriented programming','programmer','javascript','html css','python', 'react js', 'mysql'];
let randomword = () => words[Math.floor(Math.random() * words.length)];
let newWord = new word(randomword());

function play(){
    console.log(newWord.string()[0])
    inquirer.prompt(
        {
            type: "input",
            message: "Guess a letter ",
            name: "userGuess"
        }
    ).then(function(response){
        let guess = response.userGuess;
        newWord.callGuess(guess);
        if(newWord.word.indexOf(newWord.string()[1]) === -1){
            play();
        }
        else{
            console.log(`${newWord.string()[0]}\nWell done you have won the game!`)
        }
    });
}
play();
