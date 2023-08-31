const choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    let computerChoice = choices[Math.floor((Math.random() * choices.length))]
    return computerChoice
}

var computerChoice = getComputerChoice()

var playerChoice = prompt("Make your choice: ")
var lowerPlayerChoice = playerChoice.toLowerCase()

function checkPlayerChoice (choice) {
    if (!(choices.includes(lowerPlayerChoice))) {
        console.log("Pick one from rock, paper or scissors.")
    }
}

checkPlayerChoice(lowerPlayerChoice)

function checkGameResult(computerChoice, lowerPlayerChoice) {
    if (computerChoice === lowerPlayerChoice) {
        let result = "Draw"
        return result
    }
    else if (computerChoice === "rock") {
        if (lowerPlayerChoice === "paper") {
            let result = "Won"
            return result
        }
        else if (lowerPlayerChoice === "scissors") {
            let result = "Lost"
            return result
        }
    }
    else if (computerChoice === "paper") {
        if (lowerPlayerChoice === "rock") {
            let result = "Lost"
            return result
        }
        else if (lowerPlayerChoice === "scissors") {
            let result = "Won"
            return result
        }
    }
    else if (computerChoice === "scissors") {
        if (lowerPlayerChoice === "rock") {
            let result = "Won"
            return result
        }
        else if (lowerPlayerChoice === "paper") {
            let result = "Lost"
            return result
        }
    }
}

var playerScore = 0;
var computerScore = 0;

function game() {
    var result = checkGameResult(computerChoice, lowerPlayerChoice)
    if (result === "Won") {
        playerScore += 1;
    }
    else if (result === "Lost") {
        computerScore += 1;
    }
    else {
        return "No points rewarded";
    }
} 

console.log(game())
console.log("Player's score: " + playerScore)
console.log("Computer's score: " + computerScore)

playerChoice = prompt("Make your choice: ")
computerChoice = getComputerChoice()
console.log(game())
console.log("Player's score: " + playerScore)
console.log("Computer's score: " + computerScore)